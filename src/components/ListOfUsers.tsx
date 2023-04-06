import {
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
  } from "@tremor/react";
  
  const users: {
    name: string;
    email: string;
    github: string;
    id: string;
  } [] = [
    {
        id: '1',    
        name: "Peter Doe",
        email: "peterDoe@GamepadHapticActuator.com",
        github: "yazmanito"
    },
    {
        id: '2',    
        name: "John Doe",
        email: "johnDoe@GamepadHapticActuator.com",
        github: "johnDoe"
    },
    {
        id: '3',    
        name: "Maria Doe",
        email: "mariaDoe@GamepadHapticActuator.com",
        github: "yazmanito"
    },
    
  ];
  
  export function ListOfUsers() {
    return (
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell> Id </TableHeaderCell>
              <TableHeaderCell > Nombre </TableHeaderCell>
              <TableHeaderCell > Email </TableHeaderCell>
              <TableHeaderCell > Acciones </TableHeaderCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.id}</TableCell>
                <TableCell style={{display: "flex", alignItems: "center"}}>
                    <img 
                        style={{height: "32px", width: "32px", borderRadius: "50%", marginRight: "8px"}} 
                        src={`https://unavatar.io/github/${item.github}`} 
                        alt="" 
                    />
                    {item.name}
                </TableCell>
                <TableCell >{item.email}</TableCell>
                
                <TableCell>
                  Acciones
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }