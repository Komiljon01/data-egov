import { Link, useNavigate } from "react-router-dom";
import { SidebarElementsTypes } from "../../types";
import "./SidebarElement.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React, { ChangeEvent, useState } from "react";
import { Box, Divider, styled, TextField, Typography } from "@mui/material";
import { FaXmark } from "react-icons/fa6";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

interface Props {
  sidebarEl: SidebarElementsTypes;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CustomInput = styled(TextField)({
  ".MuiInputBase-root": {
    input: {
      padding: "12.5px 15px",
      fontSize: "14px",
      transition: "color 0.2s, backgroundColor 0.2s, borderColor 0.2s",
      backgroundColor: "#fff",
      borderRadius: "4px",
      border: "1px solid rgba(34, 34, 34, .2)",

      "&::placeholder": {
        fontSize: "14px",
        lineHeight: "24px",
        color: "#222",
        fontWeight: "normal",
        fontFamily: `"Fira Sans", sans-serif`,
      },
    },

    ":hover": {
      border: "none",
    },

    "&:focus-within fieldset": {
      border: "1px solid rgba(34, 34, 34, .2)",
    },

    fieldset: {
      border: "1px solid rgba(34, 34, 34, .2)",
      borderRadius: "4px",
    },
  },
  ".MuiFormHelperText-root": {
    marginLeft: "0",
    marginTop: "8px",
    color: "hls(0 84.2% 60.2%)",
    fontSize: "13px",
    lineHeight: "19px",
    fontWeight: "400",
  },
  "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(34, 34, 34, .2)",
  },
});

function SideBarElement({ sidebarEl }: Props) {
  const [fullName, setFullName] = useState<string>("");
  const [fullNameError, setFullNameError] = useState<boolean | string>(false);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean | string>(false);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [messageError, setMessageError] = useState<boolean | string>(false);
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  const navigate = useNavigate();
  const [openSurveyModal, setOpenSurveyModal] = useState(false);
  const [openContactsForm, setOpenContactsForm] = useState(false);

  const { t } = useTranslation();

  const closeModal = () => {
    if (openSurveyModal) setOpenSurveyModal(false);
    if (openContactsForm) {
      setOpenContactsForm(false);
      setSuccessMessage(false);
    }
  };

  const clearForm = () => {
    setFullName("");
    setEmail("");
    setMessage(undefined);
  };

  if (successMessage) {
    setTimeout(() => {
      closeModal();
    }, 5000);
  }

  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setFullName(value);

    if (value.trim().length < 2) {
      setFullNameError(t("sidebarElements.form.nameValidation1"));
    } else if (value.trim().length > 20) {
      setFullNameError(t("sidebarElements.form.nameValidation2"));
    } else if (!/^[a-zA-Z ]+$/.test(value)) {
      setFullNameError(t("sidebarElements.form.nameValidation3"));
    } else {
      setFullNameError(false);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setEmail(value);

    if (!/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm.test(value)) {
      setEmailError(t("sidebarElements.form.emailValidation"));
    } else {
      setEmailError(false);
    }
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setMessage(value);

    if (value.trim().length < 2) {
      setMessageError(t("sidebarElements.form.messageValidation1"));
    } else if (value.trim().length > 100) {
      setMessageError(t("sidebarElements.form.messageValidation1"));
    } else {
      setMessageError(false);
    }
  };

  const onSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (
      !fullNameError &&
      !emailError &&
      !messageError &&
      fullName &&
      email &&
      message
    ) {
      toast.success(t("toast.success"), {
        duration: 3000,
      });
      setSuccessMessage(true);
      clearForm();
    } else {
      toast.error(t("toast.formError"));
    }
  };

  const { text, path, icon: Icon, type } = sidebarEl;
  return (
    <div className="sidebar-el">
      {type === "link" && (
        <Link to={path as string} className="sidebar-el-wrapper">
          <span className="sidebar-el-text">{t(text)}</span>
          <span className="sidebar-el-icon">{Icon && <Icon />}</span>
        </Link>
      )}

      {type == "survey" && (
        <div
          className="sidebar-el-wrapper"
          onClick={() => setOpenSurveyModal(true)}
        >
          <span className="sidebar-el-text">{t(text)}</span>
          <span className="sidebar-el-icon">{Icon && <Icon />}</span>
        </div>
      )}

      {type == "form" && (
        <div
          className="sidebar-el-wrapper"
          onClick={() => setOpenContactsForm(true)}
        >
          <span className="sidebar-el-text">{t(text)}</span>
          <span className="sidebar-el-icon">{Icon && <Icon />}</span>
        </div>
      )}

      <Dialog
        open={openSurveyModal || openContactsForm}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeModal}
        className="sidebar-modal"
        aria-hidden="true"
      >
        <FaXmark onClick={closeModal} className="sidebar-modal-close-btn" />
        {openSurveyModal && (
          <>
            <Typography variant="h3" className="sidebar-survey-title">
              {t("sidebarElements.survey.title")}
            </Typography>
            <Typography variant="body1" className="sidebar-survey-text">
              {t("sidebarElements.survey.text")}
            </Typography>
            <Divider className="sidebar-survey-divider" />

            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="sidebar-survey-footer"
            >
              <Box component="span" onClick={() => setOpenSurveyModal(false)}>
                {t("sidebarElements.survey.remindme")}
              </Box>
              <Button
                variant="contained"
                onClick={() => {
                  setOpenSurveyModal(false);
                  navigate("/poll");
                }}
                disableFocusRipple
                disableElevation
              >
                {t("sidebarElements.survey.btn")}
              </Button>
            </Box>
          </>
        )}

        {openContactsForm && (
          <div className="sidebar-contacts-form">
            <Typography variant="h3" className="sidebar-form-title">
              {t("sidebarElements.form.title")}
            </Typography>

            {successMessage ? (
              <Typography variant="body1" className="success-message">
                {t("sidebarElements.form.successMessage")}
              </Typography>
            ) : (
              <>
                <Box
                  component="form"
                  noValidate
                  className="sidebar-form"
                  onSubmit={onSubmit}
                >
                  <Box component="label">
                    {t("sidebarElements.form.name")}
                    <CustomInput
                      type="text"
                      placeholder={t("sidebarElements.form.namePlaceholder")}
                      margin="none"
                      value={fullName}
                      error={Boolean(fullNameError)}
                      helperText={fullNameError}
                      onChange={handleFullNameChange}
                      required
                    />
                  </Box>
                  <Box component="label">
                    {t("sidebarElements.form.email")}
                    <CustomInput
                      type="email"
                      placeholder={t("sidebarElements.form.emailPlaceholder")}
                      value={email}
                      margin="none"
                      error={Boolean(emailError)}
                      helperText={emailError}
                      onChange={handleEmailChange}
                      required
                    />
                  </Box>
                  <Box component="label">
                    {t("sidebarElements.form.message")}
                    <CustomInput
                      minRows="4"
                      placeholder={t("sidebarElements.form.emailPlaceholder")}
                      className="sidebar-form-textarea"
                      value={message}
                      margin="none"
                      error={Boolean(messageError)}
                      helperText={messageError}
                      onChange={handleMessageChange}
                      required
                      multiline
                    />
                  </Box>

                  <Button
                    className="sidebar-form-btn"
                    variant="contained"
                    disableElevation
                    type="submit"
                  >
                    {t("sidebarElements.form.btn")}
                  </Button>
                </Box>
              </>
            )}
          </div>
        )}
      </Dialog>
    </div>
  );
}

export default SideBarElement;
