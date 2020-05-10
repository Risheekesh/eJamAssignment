import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TemplateNameWithVersions, DeploymentList } from './../App';

interface AddDeploymentProps {
    templateNameWithVersion?: TemplateNameWithVersions[];
    versionsList?: string[];
    updateVersionList: Function;
    addDeployment: Function;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            maxWidth: '800px',
            width: '100%',
            border: '1px solid rgba(0, 0, 0, 0.12)',
            padding: '24px',
            margin: '20px auto'
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    })
);

const AddDeployment: React.SFC<AddDeploymentProps> = (props: AddDeploymentProps) => {
    const [templateName, setTemplateName] = React.useState('');
    const [version, setVersion] = React.useState('');
    const [url, setUrl] = React.useState('');
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTemplateName(event.target.value);
        if (props.templateNameWithVersion) {
            const templateNameWithVersionsObj: TemplateNameWithVersions | undefined = props.templateNameWithVersion.find((obj: any) => obj.name === event.target.value);
            props.updateVersionList(templateNameWithVersionsObj);
        }
    };

    const submitForm = async () => {
        if (templateName && version && url) {
            const body: DeploymentList = {
                templateName,
                version,
                url
            }
            await props.addDeployment(body);
            setTemplateName('');
            setVersion('');
            setUrl('');
            props.updateVersionList();
        }
    }

    const clearForm = () => {
        setTemplateName('');
        setVersion('');
        setUrl('');
        props.updateVersionList();
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <label>Create Deployment:</label>
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Url" variant="outlined" value={url} onChange={(e) => { setUrl(e.target.value) }} />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        value={templateName}
                        onChange={handleChange}
                        helperText="Please select Template Name"
                    >
                        {props.templateNameWithVersion && props.templateNameWithVersion.map((option: TemplateNameWithVersions) => (
                            <MenuItem key={option.name} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={4}>

                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        value={version}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setVersion(event.target.value) }}
                        helperText="Please select Version Number"
                    >
                        {props.versionsList && props.versionsList.map((option: string) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={3} >
                    <Button variant="outlined" className="margin-right-20px" onClick={clearForm} >Clear</Button>
                    <Button variant="contained" color="primary" onClick={submitForm} disabled={!(templateName && version && url)} >
                        Submit
                </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddDeployment;