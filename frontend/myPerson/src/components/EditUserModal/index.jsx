import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPortal } from "react-dom";
import { StyledContainerModal } from "./style";
import { editUserSchema } from "./editUserSchema";
import { AuthContext } from "../../contexts/AuthContext";
import { Loading } from "../../components/Loading";
import InputMask from "react-input-mask";

export const EditUserModal = () => {
  const { handleEditUserModal, EditUser, loading, user } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      birthday: new Date(user.birthday).toLocaleDateString("pt-BR", {
        timeZone: "UTC",
      }),
      bio: user.bio,
      image: user.image,
      linkedin: user.linkedin,
      portfolio: user.portfolio,
      facebook: user.facebook,
      gender: user.gender,
    },
    resolver: yupResolver(editUserSchema),
  });

  const submit = async (data) => {
    const information = { ...data };
    await EditUser(information);

    reset();
  };

  const modalUserContent = (
    <StyledContainerModal>
      <div className="modalContent">
        <div className="headerModal">
          <h2 className="titleModal">Edit Profile</h2>
          <button
            onClick={() => handleEditUserModal()}
            className="btCloseModal"
          >
            X
          </button>
        </div>
        <form className="formModal" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="fullName" className="labelModal">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name here..."
            className="inputModal"
            {...register("name")}
          />
          {errors.name && <p className="areaError">{errors.name.message}</p>}

          <label htmlFor="email" className="labelModal">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email here..."
            className="inputModal"
            {...register("email")}
          />
          {errors.email && <p className="areaError">{errors.email.message}</p>}

          <label htmlFor="phone" className="labelModal">
            Phone
          </label>
          <InputMask
            type="text"
            mask="(99) 99999-9999"
            name="phone"
            placeholder="Enter your phone here..."
            className="inputModal"
            {...register("phone")}
          />
          {errors.phone && <p className="areaError">{errors.phone.message}</p>}

          <label htmlFor="birthday" className="labelModal">
            Birthday
          </label>
          <InputMask
            type="text"
            mask="99/99/9999"
            name="birthday"
            placeholder="Enter your birthday here..."
            className="inputModal"
            {...register("birthday")}
          />
          {errors.birthday && (
            <p className="areaError">{errors.birthday.message}</p>
          )}

          <label htmlFor="bio" className="labelModal">
            Bio
          </label>
          <input
            type="text"
            name="bio"
            placeholder="Insert your bio here..."
            className="inputModal"
            {...register("bio")}
          />
          {errors.bio && <p className="areaError">{errors.bio.message}</p>}

          <label htmlFor="image" className="labelModal">
            Image
          </label>
          <input
            type="url"
            name="image"
            placeholder="Digite o link da sua imagem"
            className="inputModal"
            {...register("image")}
          />
          {errors.image && <p className="areaError">{errors.image.message}</p>}

          <label htmlFor="linkedin" className="labelModal">
            Linkedin
          </label>
          <input
            type="url"
            name="linkedin"
            placeholder="Insert your Linkedin link..."
            className="inputModal"
            {...register("linkedin")}
          />
          {errors.linkedin && (
            <p className="areaError">{errors.linkedin.message}</p>
          )}

          <label htmlFor="portfolio" className="labelModal">
            Portfólio
          </label>
          <input
            type="url"
            name="portfolio"
            placeholder="Insert your Portfólio link..."
            className="inputModal"
            {...register("portfolio")}
          />
          {errors.portfolio && (
            <p className="areaError">{errors.portfolio.message}</p>
          )}

          <label htmlFor="facebook" className="labelModal">
            Facebook
          </label>
          <input
            type="url"
            name="facebook"
            placeholder="Insert your Facebook link..."
            className="inputModal"
            {...register("facebook")}
          />
          {errors.facebook && (
            <p className="areaError">{errors.facebook.message}</p>
          )}

          <label htmlFor="gender" className="labelModal">
            Selecionar Gênero
          </label>
          <select
            name="gender"
            id="gender"
            className="selectModal"
            {...register("gender")}
          >
            <option value="">Select</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="no binary">no binary</option>
            <option value="I prefer not to say">I prefer not to say</option>
          </select>
          {errors.gender && (
            <p className="areaError">{errors.gender.message}</p>
          )}
          <button type="submit" className="btRegisterModal" disabled={loading}>
            {loading ? <Loading /> : "Edit Profile"}
          </button>
        </form>
      </div>
    </StyledContainerModal>
  );
  return createPortal(
    modalUserContent,
    document.getElementById("modalUserEdit-root")
  );
};
