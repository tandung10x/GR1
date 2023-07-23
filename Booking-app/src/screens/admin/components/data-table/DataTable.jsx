import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomModal from "../../../../components/custom-modal/CustomModal";
import { useSelector, useDispatch } from 'react-redux'
import authApi from "../../../../api/authApi";
import { getAllManager } from "../../../../redux/userSlice";

const DataTable = ({ columns, title, name }) => {
  const dispatch = useDispatch();
  const { managers } = useSelector(state => state.manager); 
  const [listUser, setListUser] = useState([]);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [item, setItem] = useState(null);

  useEffect(() => {
    setListUser([...managers]);
  }, [managers])

  const handleDelete = async (id) => {
    await authApi.delete(id);
    alert('Delete manager successfully!');
    dispatch(getAllManager());
    setOpenConfirmDelete(false);
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/admin/users/edit/${params.row?._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Update</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => { setOpenConfirmDelete(true);  setItem(params.row?._id)}}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="data-table">
      <div className="data-table__title">
        <span>{title}</span>
        <Link
          to={`${name === 'user' ? '/admin/users/new-user' : ''}`}
          className="data-table__title-link"
        >
          Add New {name}
        </Link>
      </div>
      <DataGrid
        className="data-table__grid"
        rows={name === 'user' ? listUser : []}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row._id}
      />
      <div>
        {openConfirmDelete && (
          <CustomModal
            open={openConfirmDelete}
            content={
              <Typography variant='body1' component='div'>Do you want to delete this {name}?</Typography>
            }
            actions={
              <Box width='100%' ml={2} mr={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button
                  variant='contained'
                  size='small'
                  sx={{ marginRight: '1rem' }}
                  onClick={() => handleDelete(item)}
                >
                  yes
                </Button>
                <Button
                  variant='outlined'
                  size='small'
                  onClick={() => setOpenConfirmDelete(false)}
                >
                  no
                </Button>
              </Box>
            }
          />
        )}
      </div>
    </div>
  );
};

export default DataTable;
