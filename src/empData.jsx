import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import { connect } from 'react-redux';
import {isEmpty} from 'lodash'

function EmployeeData(props) {
    const {empData} = props
   
    return (
        <TableContainer component={Paper}>
            <Table style={{minWidth:650}} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align="right">Gender</TableCell>
                    <TableCell align="right">Phone No.</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {!isEmpty(empData.userData) && empData.userData.user.map(data => (
                    <TableRow key={data.id}>
                    <TableCell component="th" scope="row">
                        {data.name}
                    </TableCell>
                    <TableCell align="right">{data.age}</TableCell>
                    <TableCell align="right">{data.gender}</TableCell>
                    <TableCell align="right">{data.email}</TableCell>
                    <TableCell align="right">{data.phoneNo}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const mapStateToProps = state => ({
    empData: state.login
})


export default connect(mapStateToProps, null)(EmployeeData)
