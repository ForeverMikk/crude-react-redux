import { Button, Card, TextInput, Title } from '@tremor/react';

const CreateNewUser = () => {
    return (
        <Card style={{marginTop: "2rem"}}>
            <Title>Create New User</Title>

            <form action="">
                <TextInput placeholder='Aqui el nombre'/>
                <TextInput placeholder='Aqui el email'/> 
                <TextInput placeholder='Aqui el usuario de Github' />

                <div>
                    <Button type='submit' style={{marginTop: "2rem"}}>Crear</Button>
                </div>
            </form>
        </Card>
    )
}

export default CreateNewUser;