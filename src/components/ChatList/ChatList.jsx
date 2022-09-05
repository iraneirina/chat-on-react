import { List, ListItem, Divider } from '@mui/material';

export const ChatList = () => {
    const chatArr = [
        {id: 1,
        name: "Kate"
        },
        {id: 2,
         name: "John"
        },
        {id: 3,
         name: "Nick"
        },
        {id: 4,
         name: "Ann"
        },
    ]
    return (
        <List>
            {chatArr.map (({name, id}) => (
                <ListItem key={id} button divider>
            {name} </ListItem>
                ))}
        </List>
    )
}
