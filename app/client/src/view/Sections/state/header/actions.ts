import * as actionTypes from './actionTypes';
import { serviceSectionsHeader } from './services';
import { FormatSectionHeader } from './hydrators';
import { SectionHeader } from './../../models/SectionHeader';

const fetchSectionsHeaderRequest = () => ({
    type: actionTypes.FETCH_SECTION_HEADER_REQUEST
});

const fetchSectionsHeaderSuccess = (data: SectionHeader[]) => ({
    type: actionTypes.FETCH_SECTION_HEADER_SUCCESS, 
    data
});

const fetchSectionsHeaderFailure = (msgError: string) => ({
    type: actionTypes.FETCH_SECTION_HEADER_FAILURE,
    msgError
});

export const fetchSectionsHeader = (): Function => {
    return async dispatch => {
        dispatch(fetchSectionsHeaderRequest());
        try {
            const { data }: any = await serviceSectionsHeader.get();
            let adapted = data.map((section: SectionHeader) => FormatSectionHeader(section))
            dispatch(fetchSectionsHeaderSuccess(adapted))
        } catch (e) {
            dispatch(fetchSectionsHeaderFailure('Error get sections header.'));
        }
    }
}