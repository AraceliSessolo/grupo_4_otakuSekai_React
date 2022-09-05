import React, { Component } from 'react';
import ContentRowCenter from './ContentRowCenter';
import DatosEnCards from './DatosEnCards';
import Chart from './Grilla';
import CategoriasDb from './CategoriasDb';
import ProductosEnDb from './ProductosEnDb';

class ContentRowTop extends Component{

	constructor() {
		super()
		this.state = {
			nombre: '',
			descripcion: '',
			imageSrc: ''
		}
	}
	componentDidMount() {
		fetch('api/products/')
			.then(respuesta => { return respuesta.json() })
			.then(productos => { return productos.data[productos.data.length - 1] })
			.then(ultProducto => { 
				
				let parts = ultProducto.detail.split('/');
				
				let detailUrl = 'api/products/' + parts[parts.length - 1];
				
				fetch(detailUrl)
				.then(resp => { return resp.json() })
					.then(producto => { 
						this.setState({ nombre: producto.data.name });
						this.setState({ descripcion: producto.data.description });
						let parts = producto.data.image.split('/');
						this.setState({ imageSrc: 'api/products/' + parts[parts.length - 1] });
					})
					.catch(error => {
						return (error)
					})
			})
	}

	render() {

		let imageRoute;
		if (this.state.image === '') {
			imageRoute = '';
		} else {
			imageRoute = this.state.image;
		}
		console.log(imageRoute)

		return (
			<React.Fragment>
				<div className="container-fluid">
					
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Otaku Sekai Dashboard</h1>
					</div>
					
					
					<DatosEnCards />
					
					
					<div className="row">

						
						<ContentRowCenter />

						<CategoriasDb />

						<Chart />

						{/*<!-- ULTIMO PRODUCTO CREADO -->*/}
						<div className="col-lg-6 mb-4">
								<div className="card shadow mb-4">
									<div className="card-header py-3">
										<h5 className="h1 m-0 font-weight-bold text-gray-800">Último Producto</h5>
									</div>
									<div className="card-body">
										<div className="text-center">
											<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imageRoute} alt="Imagen de producto" />

										</div>
										<p className="h2"> <strong> {this.state.nombre} </strong> </p>
										<p className="h4"> <strong> {this.state.descripcion} </strong> </p>
									</div>
								</div>
							</div>

						<ProductosEnDb />

					</div>
				</div>


			</React.Fragment>
		)

	}
}

export default ContentRowTop;