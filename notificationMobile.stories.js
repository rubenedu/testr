import "./notificationMobile";
import { html } from "lit-element";

export default {
  title: "Objetos de diseño/Componentes/notification",
  component: "notification-mobile",
  argTypes: {
    isVisible: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    tipoNotificacion: {
      control: {
        type: "inline-radio",
        options: ["success", "other", "warning", "error", "information"],
      },
    },
    displayStyle: {
      control: { type: "inline-radio", options: ["toast", "inline"] },
      defaultValue: "toast",
    },
    showInteractiveLink: {
      control: { type: "boolean" },
      defaultValue: true,
    },
  },
};

const backgroundColorMap = {
  success: "#E5F6F1",
  other: "rgba(242, 242, 242, 1)",
  warning: "rgba(255, 233, 204, 1);",
  error: "rgba(254, 229, 236, 1);",
  information: "#E6F9FF",
};

const Template = ({
  isVisible,
  tipoNotificacion,
  displayStyle,
  showInteractiveLink,
}) => {
  const selectedBackgroundColor =
    backgroundColorMap[tipoNotificacion] || "#E5F6F1"; // Default color

  return html`
    <notification-mobile
      .customBackgroundColor=${selectedBackgroundColor}
      .notification=${{
        title: "Title",
        text: "Subtitle",
        interactiveLink: "Interactive Link",
      }}
      .isVisible=${isVisible}
      .tipoNotificacion=${tipoNotificacion}
      .displayStyle=${displayStyle}
      .showInteractiveLink=${showInteractiveLink}
      style="
        --notification-background: #E5F6F1;
        --notification-link-color: #1A7F37;
        --notification-icon-bg-color: rgb(42, 79, 67);
      "
    ></notification-mobile>
  `;
};

export const Notificaciones = Template.bind({});
Notificaciones.args = {
  isVisible: true,
  tipoNotificacion: "success",
  displayStyle: "toast",
};
