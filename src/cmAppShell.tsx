import { ThemeContext } from "@emotion/react"
import { MantineProvider, Text, AppShell, Navbar, Header, NavbarProps } from '@mantine/core'


export function CmNavbar() {
    const theme = ThemeContext
    return (
        <Navbar 
        p='sm' 
        width={{ sm: 250, lg: 250 }}
        sx={(theme) => ({
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.red[0] : theme.colors.blue[1],
        })}
        >
            <Text>Navbar Text</Text>
        </Navbar>
    )
}

export function CmHeader() {
    return (
        <Header p='md' height={{ base: 80, md: 120 }}>
            <Text ta="center" fz="xl">Celeste Mods List</Text>
            <Text ta="center" fz="md">:(</Text>
        </Header>
    )
}