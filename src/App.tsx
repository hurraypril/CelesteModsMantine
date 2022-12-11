import { MantineProvider, Text, Table, AppShell, Navbar, Header } from '@mantine/core';
import { CustomFonts } from './CustomFonts';
import { CmNavbar, CmHeader } from './cmAppShell';
import { ModsList } from './modsList';



function Demo() {

  return (
    <MantineProvider theme={{
      colorScheme: 'dark',
      fontFamily: 'Renogare',
      fontSizes: {
        xl: 32,
        md: 20,
      }
    }} withGlobalStyles withNormalizeCSS>
      <CustomFonts />

      <AppShell
        navbar={
          <CmNavbar />
        }
        header={
          <CmHeader />
        }
      >

        <ModsList />
      </AppShell>
    </MantineProvider>

  );
}

export default function App() {
  return (
    Demo()
  );
}
