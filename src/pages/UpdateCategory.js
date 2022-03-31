import {Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MenubarAdmin from '../components/menubarAdmin';


const UpdateCategory = () => {
   
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate("/category");
    };

    return ( 
        <>
        <header>
            <MenubarAdmin/>
        </header>
        <Container>
            <Row>
                <Col xs="12">
                    <h2 className="font-title mt-3">Edit Category</h2>
                </Col>
                <Col xs="12">
                    <form>
                        <input type="text"
                        className="form-control my-4"
                        placeholder="Category Name"
                        />
                         <div className="d-grid gap-2">
                            <Button className="btn btn-success"
                            onClick={handleEdit}
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </Col>

            </Row>
        </Container>
       
       
       
       
       
        </>
     );
}
 
export default UpdateCategory;