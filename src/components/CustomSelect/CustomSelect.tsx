import Select, { SingleValue } from 'react-select'
import { Currency } from '../../config/currency'
import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext'
import { ICurrencyOption } from '../../types'

export const CustomSelect = () => {
    const { currencyOption, setCurrencyOption } = useCurrencyContext();

    const options: ICurrencyOption[] = [
        { value: Currency.USD, label: 'USD' },
        { value: Currency.EUR, label: 'EUR' },
        { value: Currency.GBR, label: 'GBR' },
    ]

    const handleSelect = (newValue: ICurrencyOption | null): void => {
        setCurrencyOption(newValue)
    }

    return (
        <Select
            options={options}
            isMulti={false}
            defaultValue={currencyOption}
            onChange={handleSelect}
        />
    )
}
