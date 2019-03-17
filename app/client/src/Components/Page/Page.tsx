import * as React from 'react'

import { PageWrapper } from './styled'

interface Props {
    headPage: any;
    mainPage: any;
    children: React.children;
}

export const Page: React.SFC<Props> = (props) => (
    <PageWrapper>
        {props.children}
    </PageWrapper>
)
