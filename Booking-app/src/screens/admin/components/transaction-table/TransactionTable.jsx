import React from "react"
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper } from "@mui/material";

export default function TransactionTable() {
    const rows = [
        {
            id: 1,
            product: "Acer Nitro 5",
            img: "https://2sao.vietnamnetjsc.vn/images/2021/11/24/17/15/lisa.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 2,
            product: "Playstation 5",
            img: "https://2sao.vietnamnetjsc.vn/images/2021/11/24/17/15/lisa.jpg",
            customer: "Michael Doe",
            date: "1 March",
            amount: 900,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id: 3,
            product: "Redragon S101",
            img: "https://2sao.vietnamnetjsc.vn/images/2021/11/24/17/15/lisa.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 35,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 4,
            product: "Razer Blade 15",
            img: "https://2sao.vietnamnetjsc.vn/images/2021/11/24/17/15/lisa.jpg",
            customer: "Jane Smith",
            date: "1 March",
            amount: 920,
            method: "Online",
            status: "Approved",
        },
        {
            id: 5,
            product: "ASUS ROG Strix",
            img: "https://2sao.vietnamnetjsc.vn/images/2021/11/24/17/15/lisa.jpg",
            customer: "Harold Carol",
            date: "1 March",
            amount: 2000,
            method: "Online",
            status: "Pending",
        },
    ];
    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Tracking ID</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={row.img}
                                        alt=""
                                        style={{ width: 30, height: 30, borderRadius: '50%', marginRight: '10px', objectFit: 'cover' }}
                                    />
                                    {row.product}
                                </Box>
                            </TableCell>
                            <TableCell>{row.customer}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                            <TableCell>{row.method}</TableCell>
                            <TableCell>
                                <span className={`transaction-status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
