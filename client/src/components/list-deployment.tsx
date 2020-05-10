import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DeploymentList } from './../App';

const useStyles = makeStyles({
    root:{
        marginTop: '20px'
    },
    table: {
        minWidth: 650,
    },
});


interface ListDeploymentProps {
    deploymentList?: DeploymentList[];
    deleteDeployment: Function;
}
const ListDeploymentTable: React.SFC<ListDeploymentProps> = (props: ListDeploymentProps) => {

    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.root} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Template Name</TableCell>
                        <TableCell >Url</TableCell>
                        <TableCell >Version Name</TableCell>
                        <TableCell >Deployed At</TableCell>
                        <TableCell >Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.deploymentList && props.deploymentList.map((row: DeploymentList) => (
                        <TableRow key={row.templateName}>
                            <TableCell component="th" scope="row">
                                {row.templateName}
                            </TableCell>
                            <TableCell >{row.url}</TableCell>
                            <TableCell >{row.version}</TableCell>
                            <TableCell >{row.deployementAt}</TableCell>
                            <TableCell onClick={props.deleteDeployment.bind(null, row._id)} className="link"  >Delete</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ListDeploymentTable;