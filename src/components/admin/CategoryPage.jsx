import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategies } from '../../redux/slices/categorySlice';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrash, FaBan } from 'react-icons/fa';
import { Container, Button } from 'react-bootstrap';

function CategoryPage() {
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.category.data); // khi state thây đổi thì re render lại component

    console.log("categories: ", categories)

    useEffect(() => {
        dispatch(getAllCategies())
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-end mb-4">
                <Button variant="primary" onClick={() => { }}>+Add Category</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories && categories.map((category) => (
                        <tr key={category?.id}>
                            <td>{category?.id}</td>
                            <td>{category?.categoryName}</td>
                            <td style={{ color: category.status ? 'blue' : 'red' }}>
                                {category?.status ? "Active" : "Inactive"}</td>
                            <td>
                                <FaEdit style={{ color: 'grey', cursor: 'pointer', marginRight: '10px' }} onClick={() => { }} />
                                <FaTrash style={{ color: 'red', cursor: 'pointer', marginRight: '10px' }} onClick={() => { }} />
                                <FaBan style={{ color: category?.status === "Active" ? 'grey' : 'blue', cursor: 'pointer' }} onClick={() => { }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default CategoryPage;
