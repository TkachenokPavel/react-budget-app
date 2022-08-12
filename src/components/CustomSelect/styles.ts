import { StylesConfig } from 'react-select';
import { ICurrencyOption } from '../../types';

export const customSelect: StylesConfig<ICurrencyOption, boolean> = {
    control: (provided) => ({
        ...provided,
        width: '100px',
    }),
}
