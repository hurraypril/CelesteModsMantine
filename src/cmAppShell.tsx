import { MantineProvider, Text, AppShell, Navbar, Header, NavbarProps } from '@mantine/core'


export function CmNavbar() {
    return (
        <Navbar 
        p='sm' 
        width={{ sm: 250, lg: 250 }}
        styles={(theme) => ({
            main: {
            backgroundColor: theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
            }
        })}>
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