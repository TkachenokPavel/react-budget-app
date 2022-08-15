import Select, { SingleValue } from 'react-select'
import { Currency } from '../../config/currency'
import { useCurrencyContext } from '../../context'
import { ICurrencyOption } from '../../types'
import { customSelect } from "./styles";

export const CustomSelect = () => {
    const { currencyOption, setCurrencyOption } = useCurrencyContext();

    const options: ICurrencyOption[] = [
        { value: Currency.USD, label: 'USD' },
        { value: Currency.EUR, label: 'EUR' },
        { value: Currency.GBR, label: 'GBR' },
    ]

    const handleSelect = (newValue: SingleValue<ICurrencyOption>): void => {
        setCurrencyOption(newValue)
    }

    return (
        <Select
            styles={customSelect}
            options={options}
            isMulti={false}
            isSearchable={false}
            defaultValue={currencyOption}
            onChange={handleSelect}
        />
    )
}
