import * as React from 'react';
import { connect } from 'react-redux';
import { fetchSectionsHeader } from './../../../../view/Sections/state/header/actions'
import * as selectSectionsHeader from './../../state/header/selectors'
import { ItemList } from './../../../../Components/Dashboard/styled';
import { SectionHeader } from './../../../Sections/models/SectionHeader'

interface Props {
    fetchSectionsHeader: Function;
    sectionsHeader: SectionHeader[]
}

class Container extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { fetchSectionsHeader } = this.props;
        fetchSectionsHeader();
    }
    render(): JSX.Element {
        const { sectionsHeader } = this.props;
        return (
            <ItemList>
                {sectionsHeader.map((section: SectionHeader) => (
                    <li><a href={section.url}>{section.name}</a>
                        {/* <ul>
                            <li><a href="http://">Item 1</a></li>
                            <li><a href="http://">Item 2</a></li>
                        </ul> */}
                    </li>
                ))}
            </ItemList>
        )
    }
}



const mapStateToProps = state => ({
    sectionsHeader: selectSectionsHeader.getSectionsHeader(state)
});

const mapDispatchToProps = dispatch => ({
    fetchSectionsHeader: () => dispatch(fetchSectionsHeader())
});

export const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);