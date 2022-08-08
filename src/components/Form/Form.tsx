import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useExpensesContext } from '../../context';
import { FormValues } from '../../types';
import { Title } from '../Title/Title'
import { StyledForm } from './styles'

export const Form = () => {
    const { register, handleSubmit } = useForm<FormValues>();
    const { setExpense } = useExpensesContext();

    const onSubmit: SubmitHandler<FormValues> = newExpense => {
        setExpense({ ...newExpense, id: uuidv4() })
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Title title='Add Expense' />
            <input
                type="text"
                placeholder='enter name...'
                {...register('name', {
                    required: true,
                })}
            />
            <input
                type="number"
                placeholder='enter cost...'
                {...register('cost', {
                    required: true,
                    valueAsNumber: true
                })}
            />
            <button>Done</button>
        </StyledForm>
    )
}
