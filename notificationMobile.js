import { LitElement, html, css } from "lit";
import "./notification.scss";
import "../link/link";
import {
  success,
  error,
  information,
  other,
  warning,
  backgroundSuccess,
  backgroundError,
  backgroundInformation,
  backgroundOther,
  backgroundWarning,
  btncloseGeneral,
} from "../icon/iconsNotifications";

class NotificationMobile extends LitElement {
  static get properties() {
    return {
      notification: { type: Object },
      isVisible: { type: Boolean },
      customBackgroundColor: { type: String }, // Nueva propiedad para el color de fondo
      displayStyle: { type: String },
      tipoNotificacion: { type: String },
    };
  }
  static get styles() {
    return css`
      :host {
        --notification-width: 328px;
        --notification-padding: 16px;
        --notification-background: var(--semantic-success-50, #e5f6f1);
        --notification-title-font-size: 16px;
        --notification-subtitle-font-size: 14px;
        --notification-link-color: var(--semantic-success-600, #1a7f37);
        --notification-close-btn-color: var(--neutral-700, #4c4c4c);
        --notification-icon-bg-color: rgb(42, 79, 67);
        --notification-icon-size: 24px;
        --notification-icon-border-radius: 12px;
        --elevation-LG: 0px 0px 24px 0px rgba(0, 0, 0, 0.25);

        /* ...otros estilos... */
      }

      .notification {
        border: 8px; /* Añade un borde de 8px, puedes especificar el color si lo deseas */
        display: flex;
        width: var(--notification-width);
        padding: var(--notification-padding);
        justify-content: space-between;
        align-items: flex-start;
        border-radius: 8px;
        background: var(--notification-background);
        position: relative;
        background: rgba(255, 233, 204, 1);

        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
      }

      .notification-content {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .notification-title {
        white-space: nowrap; /* Impide que el texto se ajuste en líneas múltiples */
        overflow: hidden; /* Oculta cualquier texto que sobrepase el elemento */
        text-overflow: ellipsis; /* Añade puntos suspensivos al f
      
        color: var(--textual-basic-dark, #030303);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px; /* 162.5% */
        letter-spacing: 0.019px;
        flex: 1 0 0;
        margin-left: 8px;
      }

      .notification-subtitle {
        align-self: stretch;
        color: var(--textual-basic-dark, #030303);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px; /* 162.5% */
        letter-spacing: 0.019px;
      }

      .notification-link {
        margin-top: 8px;
      }
      .textLimiting {
      }
      .close-btn {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 24px;
        height: 24px;
        background-image: url("./img/close-error.svg"); // Asegúrate de que esta imagen tenga un fondo transparente
        background-size: 100% 100%;
        border: none;
        cursor: pointer;
        padding: 0;
        background-color: transparent; // Fondo del botón transparente
      }
      .close-btn:focus {
        box-shadow: 0px 0px 4px 3px #4ec3cd; /* Mayor difuminación y extensión para el estado de focus */
        border-radius: 0; /* Elimina el redondeo para tener esquinas cuadradas 
      }
      /* ..
      .notification-link:hover {
        color: var(--primary-500, #046080); /* Mantén el mismo color que el estado normal */
        text-decoration: none; /* Opcional: Elimina el subrayado al hacer hover si lo deseas */
      }
      .notification-title-container {
        display: flex;
        align-items: center;
        gap: 8px; /* Espacio entre el icono y el título */
      }

      .smallicon {
        width: var(--notification-icon-size); /* 24px */
        height: var(--notification-icon-size); /* 24px */
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--notification-icon-border-radius);
        position: relative;
        background-image: url("./img/Background_icon_web_banner_warning.svg");
        background-size: 100% 100%; /* Asegúrate de que la imagen cubra todo el contenedor */
        background-repeat: no-repeat;
      }

      .smallicon img {
        width: 16px; /* Establece el ancho a 16px */
        height: 16px; /* Establece el alto a 16px */
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .notification-subtitle,
      .notification-link {
        display: flex;
        align-items: center;
        position: relative;
        margin-left: 16px;
      }

      .notification-subtitle::before,
      .notification-link::before {
        content: "";
        width: var(--notification-icon-size);
        height: var(--notification-icon-size);
        display: inline-block;
        /* Añadir un espacio vacío del mismo tamaño que el ícono */
      }

      .svg-foreground {
        position: absolute;
        z-index: 1;
      }
      .inline-notification {
        position: relative;
        width: 100vw;
      }
    `;
  }
  static get CONSTANTES() {
    return {
      TIME_CLOSE_NOTIFICATION: 200000,
      TIME_CLOSE_NOTIFICATION_NO_LINK: 200000,
    };
  }
  constructor() {
    super();
    this.notification = {
      title: "Title",
      text: "Subtitle",
      interactiveLink: "Interactive link",
    };

    this.isVisible = true;
    this.timer = null;
  }

  updated(changedProperties) {
    console.log(changedProperties);
    if (changedProperties.has("isVisible") && this.isVisible) {
      console.log("la propiedad cambiada es isvisible");
      this.restartTimer();
    }
    if (!changedProperties.has("isVisible")) {
      console.log("se ha cambiado una propiedad pero no es isvisble");
      this.isVisible = true;
      this.restartTimer();
    }
  }

  restartTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    const closeTime = this.showInteractiveLink
      ? NotificationMobile.CONSTANTES.TIME_CLOSE_NOTIFICATION
      : NotificationMobile.CONSTANTES.TIME_CLOSE_NOTIFICATION_NO_LINK; // 10 segundos si showInteractiveLink es true, de lo contrario 5 segundos

    this.timer = setTimeout(() => {
      this.closeNotification();
    }, closeTime);
  }

  closeNotification() {
    this.isVisible = false;
    this.requestUpdate();
  }

  render() {
    console.log("hola" + this.displayStyle);

    let notificationClasses = "notification";
    if (this.displayStyle === "inline") {
      notificationClasses = notificationClasses + " inline-notification";
    }
    let icon = success();
    let closeImgBtn = btncloseGeneral();
    let backgroundIcon = backgroundSuccess();

    switch (this.tipoNotificacion) {
      case "success":
        icon = success();
        backgroundIcon = backgroundSuccess();
        break;
      case "other":
        icon = other();
        backgroundIcon = backgroundOther();
        break;
      case "warning":
        icon = warning();
        backgroundIcon = backgroundWarning();
        break;
      case "error":
        icon = error();
        backgroundIcon = backgroundError();
        break;
      case "information":
        icon = information();
        backgroundIcon = backgroundInformation();
        break;
    }

    const boxShadowStyle = this.displayStyle === "inline" ? "none" : "var(--elevation-LG)";
    if (!this.isVisible) {
      return html``;
    }

    return html`
      <div
        class="${notificationClasses}"
        style="background-color: ${this.customBackgroundColor}; box-shadow: ${boxShadowStyle}"
      >
        <div class="notification-content">
          <div class="notification-title-container">
            <div class="smallicon">
              <div>${backgroundIcon}</div>
              <div class="svg-foreground">${icon}</div>
            </div>
            <div class="notification-title">${this.notification.title}</div>
          </div>
          <div class="notification-subtitle">${this.notification.text}</div>
          ${this.showInteractiveLink
            ? html` <div class="notification-link">
                <sdss-link size="regular" link-role="link" href="#" title="descripción" !darkBackground>
                  Interactive Link
                </sdss-link>
              </div>`
            : html``}
        </div>
        <div class="textLimiting">
          <button class="close-btn" @click="${this.closeNotification}">${closeImgBtn}</button>
        </div>
      </div>
    `;
  }
}

customElements.define("notification-mobile", NotificationMobile);
