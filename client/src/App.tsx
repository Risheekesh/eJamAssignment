import React from 'react';
import './App.css';
import ListDeploymentTable from './components/list-deployment';
import AddDeployment from './components/add-deployment';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

export interface TemplateNameWithVersions {
  name: string;
  versions: string[];
}

export interface DeploymentList {
  templateName: string;
  version: string;
  url: string;
  deployementAt?: Date;
  _id?: string;
}

interface AppState {
  loader: boolean;
  templateNameWithVersion?: TemplateNameWithVersions[];
  versions?: string[];
  deploymentList?: DeploymentList[];
}

class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      loader: false
    }
  }

  componentDidMount() {
    this.setState({
      loader: true
    })
    this.getDeploymentList();
    this.getTemplateNameWithVersion();
  }

  private getDeploymentList = async () => {
    const result = await axios.get('/api/deployment');
    this.setState({
      loader: false,
      deploymentList: result.data.data
    });
  }

  private getTemplateNameWithVersion = async () => {
    const result = await axios.get('/api/template');
    this.setState({
      loader: false,
      templateNameWithVersion: result.data.data
    });
  }

  private deleteDeployment = async (id: string) => {
    this.setState({
      loader: true
    })
    await axios.delete(`/api/deployment/${id}`);
    this.getDeploymentList();
  }

  private addDeployment = async (body: DeploymentList) => {
    this.setState({
      loader: true
    })
    await axios.post('/api/deployment', body);
    this.getDeploymentList();
    return true;

  }

  private updateVersionList = async (templateNameWithVersions?: TemplateNameWithVersions) => {
    this.setState({
      versions: templateNameWithVersions && templateNameWithVersions.versions
    })
  };

  render() {

    const { deploymentList, loader, templateNameWithVersion, versions } = this.state;
    return (
      <div className="body">
        <header className="page-title">
          Deployment Page
      </header>
        {loader ?
          <CircularProgress disableShrink className="center-align-loader" />
          : null
        }
        <AddDeployment addDeployment={this.addDeployment} updateVersionList={this.updateVersionList} templateNameWithVersion={templateNameWithVersion} versionsList={versions} />
        <Grid container spacing={2}>
          <Grid item xs={10} className="center" >
            <label>Deployment List:</label>
            <ListDeploymentTable deploymentList={deploymentList} deleteDeployment={this.deleteDeployment} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
