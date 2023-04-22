import { Button, Form} from "react-bootstrap"

function CartForm({ formData, handleSubmit, handleChange }) {
	return (
		<form onSubmit={handleSubmit} onChange={handleChange}>
			<Form.Group className="mb-3">
						<Form.Label>Nombre completo</Form.Label>
						<Form.Control placeholder="Ej: Juan Pérez"
							name="name"
							required
							defaultValue={formData.name}/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Correo Electrónico</Form.Label>
						<Form.Control placeholder="Ej: juan@hola.com"
							name="email"
							required
							defaultValue={formData.email}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Teléfono</Form.Label>
						<Form.Control placeholder="Ej: 095700684"
							name="phone"
							defaultValue={formData.phone}
							required/>
					</Form.Group>
					
			
					<Button type="submit" className="addCart">Generar orden de compra</Button>
		</form>
	)
}

export default CartForm