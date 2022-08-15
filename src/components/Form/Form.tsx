import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useExpensesContext } from '../../context';
import { FormValues } from '../../types';
import { Title } from '../Title/Title'
import { Button, InputCost, InputName, StyledForm } from './styles'

export const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
    const { setExpense } = useExpensesContext();

    const onSubmit: SubmitHandler<FormValues> = newExpense => {
        setExpense({ ...newExpense, id: uuidv4() });
        reset()
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Title title='Add Expense' />
            <InputName
                type="text"
                placeholder='enter name...'
                {...register('name', {
                    required: true,
                    maxLength: {
                        value: 15,
                        message: 'MaxLength is 15'
                    }
                })}
            />
            {errors.name && "Name is required"}
            <InputCost
                type="number"
                placeholder='enter cost...'
                {...register('cost', {
                    required: true,
                    valueAsNumber: true,
                    maxLength: {
                        value: 5,
                        message: 'MaxLength is 5'
                    }
                })}
            />
            {errors.cost && "Cost is required"}
            <Button>Done</Button>
        </StyledForm>
    )
}
