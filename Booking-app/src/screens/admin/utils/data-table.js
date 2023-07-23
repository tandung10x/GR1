export const userColumns = [
  {
    field: "username",
    headerName: "Username",
    width: 300,
    renderCell: (params) => {
      return (
        <div>
          {params.row?.username}
        </div>
      );
    },
  },
  {
    field: "role",
    headerName: "Role",
    width: 300,
    renderCell: (params) => {
      return (
        <div>
          {params.row?.role}
        </div>
      )
    },
  },
  {
    field: "more_detail",
    headerName: "Detail",
    width: 400,
    renderCell: (params) => {
      return (
        <div>
          {params.row?.more_detail}
        </div>
      )
    },
  },
];