import { Global } from '@mantine/core';
import regular from './Renogare-Regular.woff2';

export function CustomFonts() {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'Renogare',
                        src: `url('${regular}') format("woff2")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
            ]}
        />
    );
}