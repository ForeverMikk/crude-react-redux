import { Button, Badge, Card, TextInput, Title } from '@tremor/react';
import { useUserActions } from '../hooks/useUserActions';
import { useState } from 'react';

const CreateNewUser = () => {

    const { addUser } = useUserActions();
    const [result, setResult] = useState<'ok' | 'ko' | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setResult(null);

        const form = event.target;
        const formData = new FormData(form);
        
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const github = formData.get('github') as string;

        if(!name || !email || !github) {
            return setResult('ko');
        }

        addUser({name, email, github}); 
        setResult('ok');
        form.reset();
    }

    return (
        <Card style={{marginTop: "2rem"}}>
            <Title>Create New User</Title>
            <br />
            <form onSubmit={handleSubmit}>
                <TextInput name='name' placeholder='Aqui el nombre'/>
                <TextInput name='email' placeholder='Aqui el email'/> 
                <TextInput name='github' placeholder='Aqui el usuario de Github' />
                <span>
                    {result === 'ok' && <Badge color='green'>Guardado Correctamente</Badge>}
                    {result === 'ko' && <Badge color='red'>Eror con los campos</Badge>}
                </span>

                <div>
                    <Button type='submit' style={{marginTop: "2rem"}}>Crear</Button>
                </div>

                <div className="card">
                    <div>

                    </div>
                </div>
            </form>
        </Card>
    )
}

export default CreateNewUser;