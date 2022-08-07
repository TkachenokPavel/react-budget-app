import { Title } from '../Title/Title'
import { StyledForm } from './styles'
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from '../../types';

export const Form = () => {
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = newExpense => {
        console.log(newExpense)
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
