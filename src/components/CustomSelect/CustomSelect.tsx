import Select from 'react-select'
import { Currency } from '../../config/currency'
import { ICurrencyOption } from '../../types'

export const CustomSelect = () => {
    const options: ICurrencyOption[] = [
        { value: Currency.USD, label: 'USD' },
        { value: Currency.EUR, label: 'EUR' },
        { value: Currency.GBR, label: 'GBR' },
    ]

    return (
        <Select
            options={options}
            isMulti={false}
        />
    )
}
