import styles from './../../../pages/form_card/FormCardPage';
import Input from '../../ui/input/Input';
import TextButton from './../../ui/text_button/text_buton.module.scss';
import { faIdCard, faImage, faUser } from "@fortawesome/free-solid-svg-icons";

export default function FormCard({ formData, onChange, onSubmit, modoEdicao }) {
  return (
    <div className={styles.FormContainer}>
      <h2 className={styles.Title}>{modoEdicao ? 'Editar Cartão' : 'Novo Cartão'}</h2>
      <form onSubmit={onSubmit} className={styles.Form}>
        <Input
          name="id"
          type="number"
          icon={faIdCard}
          value={formData.id}
          onChange={onChange}
        />
        <Input
          name="nome"
          type="text"
          icon={faUser}
          value={formData.nome}
          onChange={onChange}
        />
        <Input
          name="img"
          type="text"
          icon={faImage}
          value={formData.img}
          onChange={onChange}
        />
        <TextButton type="submit">
          {modoEdicao ? 'Atualizar' : 'Criar'}
        </TextButton>
      </form>
    </div>
  );
}