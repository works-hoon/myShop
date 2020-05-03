import React from 'react'
import axios from 'axios'
import { 
	Container, Row, Col, Nav, NavDropdown, Navbar, Form, FormControl, Button
} from 'react-bootstrap';

function main() {
	let resultList = [];
	const bestcategoriesClick = (event) => {
		axios.get(`/api/products/bestcategories?categoryId=${event.currentTarget.value}`)
			.then(response => {
				response.data.data.map((data,i)=>{
					resultList.push(data)
				})
			})
	};
	return (
		<div>
			<Container fluid className="px-0">
				<Navbar bg="primary" variant="dark" expand="lg">
					<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav variant="pills" defaultActiveKey="/" as="ul" id="gnb" className="gnb mr-auto">
							<Nav.Link href="/" eventKey="1">홈</Nav.Link>
							<NavDropdown title="베스트카테고리" id="nav-dropdown" className="gnb_dep2">
								<NavDropdown.Item as="button" value="1001" onClick={bestcategoriesClick}>여성패션</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1002">남성패션</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1003">베이비패션 (0~3세)</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1004">여아패션 (3세 이상)</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1005">남아패션 (3세 이상)</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1006">스포츠패션</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1007">신발</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1008">가방/잡화</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1010">뷰티</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1011">출산/유아동</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1012">식품</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1013">주방용품</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1014">생활용품</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1015">홈인테리어</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1016">가전디지털</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1017">스포츠/레저</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1018">자동차용품</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1019">도서/음반/DVD</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1020">완구/취미</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1021">문구/오피스</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1024">헬스/건강식품</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1025">국내여행</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1026">해외여행</NavDropdown.Item>
								<NavDropdown.Item as="button" eventKey="1029">반려동물용품</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						{/* <Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-success">Search</Button>
						</Form> */}
					</Navbar.Collapse>
				</Navbar>
				<Row>
					<Col>
						<div id="dataResult">
							{
								resultList.map(data => (
									<div>
										{data.productName}
									</div>
								))
							}
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default main
