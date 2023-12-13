import { LitElement, html, css } from "lit";
import {
  success,
  warning,
  backgroundSuccess,
  btncloseBannerWarning,
  BannerInformationIcon,
  BackgroundBannerInformationIcon,
  backgroundWarning,
} from "../icon/iconsNotifications";
import "./notification.scss";

class notificationMobileBanner extends LitElement {
  static get properties() {
    return {
      notification: { type: Object },
      isVisible: { type: Boolean },
      customBackgroundColor: { type: String }, // Nueva propiedad para el color de fondo
      iconBackground: { type: String }, // Nueva propiedad para el fondo del ícono
      displayStyle: { type: String },
      showInteractiveLink: { type: Boolean },
      tipoNotificacion: { type: String },
      colorBottomSolid: { type: String },
    };
  }

  static get styles() {
    return css`
    :host {
      
      --notification-width: 328px;
      --notification-padding: 16px;
      --notification-background: var(--semantic-success-50, #E5F6F1);
      --notification-title-font-size: 16px;
      --notification-subtitle-font-size: 14px;
      --notification-link-color: var(--semantic-success-600, #1A7F37);
      --notification-close-btn-color: var(--neutral-700, #4C4C4C);
      --notification-icon-bg-color: rgb(42, 79, 67);
      --notification-icon-size: 24px;
      --notification-icon-border-radius: 12px;
      --elevation-LG: 0px 0px 24px 0px rgba(0, 0, 0, 0.25);
      --text-color: var(--notification-text-color, #FFFFFF); // Usa la variable para el color del texto
    }

    .notification {
      border: 8px ; /* Añade un borde de 8px, puedes especificar el color si lo deseas */
      display: flex;
      width: var(--notification-width);
      padding: var(--notification-padding);
      justify-content: space-between;
      align-items: flex-start;
      border-radius: 0;


      /* Aplicar el borde inferior */
      border-bottom: 2px solid var(--neutral-900, #191919);
      
      background:#4C4C4C;
      position: relative;
    }

    .notification-content {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }


    .notification-title {
      color: $() // Aplica el color del texto
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 26px; /* 162.5% */
      letter-spacing: 0.019px;
      margin: 0;
      flex: 1 0 0;

    }
    
    .notification-subtitle {
      align-self: stretch;
      color: var(--text-color); // Aplica el color del texto
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px; /* 162.5% */
      letter-spacing: 0.019px;
      margin-left:32px;

    }
    
    .notification-title, .notification-subtitle, .notification-link {
      color: var(--notification-text-color); // Aplica el color del texto
    }
      
    .notification-link {

      margin-top: 8px;
      margin-left:32px;

    }
      
      .close-btn {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 24px;
        height: 24px;
        background-size: 100% 100%;
        border: none;
        cursor: pointer;
        padding: 0; 
        background-color: transparent; // Fondo del botón transparente
      }
      .close-btn:focus {
        box-shadow:  0px 0px 4px 3px #4EC3CD;
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
  width: var(--notification-icon-size);  /* 24px */
  height: var(--notification-icon-size); /* 24px */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--notification-icon-border-radius);
position:relative;
  background-size: 100% 100%; /* Asegúrate de que la imagen cubra todo el contenedor */
  background-repeat: no-repeat;
  
}


.smallicon img {
  width: 16px;  /* Establece el ancho a 16px */
  height: 16px; /* Establece el alto a 16px */
  display: flex;
  justify-content: center;
  align-items: center;
}
.notification-subtitle, .notification-link {
  display: flex;
  align-items: center;
  position: relative;
  margin-left:8px;
}

.notification-subtitle::before, .notification-link::before {
  content: '';
  width: var(--notification-icon-size);
  height: var(--notification-icon-size);
  display: inline-block;
  /* Añadir un espacio vacío del mismo tamaño que el ícono */
}

.svg-foreground{
  position:absolute;
  z-index:1;
}

.inline-notification {
  position:relative;
  width:100vw;

 
}
    `;
  }

  constructor() {
    super();
    this.notification = {
      title: "Title",
      text: "Subtitle",
      interactiveLink: "Interactive link",
    };
    this.isVisible = true;
  }

  closeNotification() {
    this.isVisible = false;
    this.requestUpdate(); // This will trigger re-rendering
  }

  render() {
    console.log("tipo notificacion" + this.tipoNotificacion);

    let icon = success();
    let backgroundIcon = backgroundSuccess();
    let closeImgBtn = btncloseBannerInformationIcon();
    let notificationClasses = "notification";
    if (this.displayStyle === "inline") {
      console.log(this.displayStyle);
      notificationClasses = notificationClasses + " inline-notification";
    }
    switch (this.tipoNotificacion) {
      case "warning":
        icon = warning();
        backgroundIcon = backgroundWarning();
        closeImgBtn = btncloseBannerWarning();
        break;
      case "information":
        closeImgBtn = btncloseBannerInformationIcon();
        icon = BannerInformationIcon();
        backgroundIcon = BackgroundBannerInformationIcon();
        break;
    }

    const boxShadowStyle =
      this.displayStyle === "inline" ? "none" : "var(--elevation-LG)";

    if (!this.isVisible) {
      return html``;
    }
    const borderBottomStyle = `2px solid ${this.colorBottomSolid}`; // Color por defecto si no se provee colorBottomSolid

    console.log("hola" + this.borderBottomStyle);

    return html`
      <div
        class="${notificationClasses}"
        style="background-color: ${this
          .customBackgroundColor}; box-shadow: ${boxShadowStyle}; border-bottom: ${borderBottomStyle};"
      >
        <div class="notification-content">
          <div class="notification-title-container">
            <div class="smallicon">
              <div class="svg-background">${backgroundIcon}</div>
              <div class="svg-foreground">${icon}</div>
            </div>

            <div class="notification-title">${this.notification.title}</div>
          </div>

          <div class="notification-subtitle">${this.notification.text}</div>
          ${this.showInteractiveLink
        ? html`  <div class="notification-link">
            <sdss-link 
            size="regular"
            link-role="link"
            href="#"
            title="descripción"
            !darkBackground
           >
          Interactive Link
          </sdss-link>
       
            </div>`
        : html``
      }
        </div>
        <button class="close-btn" @click="${this.closeNotification}">
          ${closeImgBtn}
        </button>
      </div>
    `;
  }
}

customElements.define("notification-mobile-banner", notificationMobileBanner);
