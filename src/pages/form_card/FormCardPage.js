import { useFormCard } from '../../hooks/useFormsCard';
import FormCard from '../../components/container/form_cards/FormCard';

export default function FormCardPage() {
  const {
    formData,
    handleChange,
    handleSubmit,
    modoEdicao,
  } = useFormCard();

  return (
    <FormCard
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      modoEdicao={modoEdicao}
    />
  );
}