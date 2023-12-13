import { LitElement, html, css } from "lit";
import {
  success,
  warning,
  backgroundSuccess,
  btncloseBannerInformationIcon,
  btncloseBannerWarning,
  BannerInformationIcon,
  BackgroundBannerInformationIcon,
  backgroundWarning,
} from "../icon/iconsNotifications";
import "./notification.scss";

class notificationWebBanner extends LitElement {
  static get properties() {
    return {
      notification: { type: Object },
      isVisible: { type: Boolean },
      customBackgroundColor: { type: String }, // Nueva propiedad para el color de fondo
      displayStyle: { type: String },
      showInteractiveLink: { type: Boolean },
      tipoNotificacion: { type: String },
      colorBottomSolid: { type: String },
    };
  }
  static get styles() {
    return css` 

    @media (max-width: 600px) {
      .mobile-banner {
        display: block; /* Se muestra en pantallas pequeñas */
      }
      .non-mobile-content {
        display: none; /* Se oculta en pantallas pequeñas */
      }
    }
    
    @media (min-width: 601px) {
      .mobile-banner {
        display: none; /* Se oculta en pantallas grandes */
      }
      .non-mobile-content {
        display: block; /* Se muestra en pantallas grandes */
      }
    }
    

    
    :host {
      
      --notification-width: 100vw; /* Actualizado para reflejar el ancho proporcionado */
      --notification-padding: 4px 24px; /* Actualizado para reflejar el padding proporcionado */
      --notification-background-exclamation: var(--semantic-info-50, #E6F9FF);
      --notification-title-font-size: 16px;
      --notification-subtitle-font-size: 14px;
      --notification-link-color: var(--semantic-success-600, #1A7F37);
      --notification-close-btn-color: var(--neutral-700, #4C4C4C);
      --notification-icon-bg-color: rgb(42, 79, 67);
      --notification-icon-size: 24px;
      --notification-icon-border-radius: 12px; 

      /* ...otros estilos... */
    }
    .notification {
      display: flex;
      flex-direction: row;
      width:100vw;
      padding: var(--notification-padding);
      justify-content: space-between;
      align-items: center;
      box-sizing:border-box;

      border-radius: 0; /* Hace que las esquinas sean cuadradas */
      border-bottom: 2px solid var(--neutral-900, #191919); /* Establece el borde inferior */
      background: var(--neutral-700, #4C4C4C); /* Establece el color de fondo */
      
      position: relative;
    }
    .notification-content {
      display: flex;
      flex-direction: row;
      margin-top:8px;
      margin-bottom:8px;
      margin-right:16px;
      margin-left:16px;
      align-items: center;
    }
    
    .notification-title-container {
      display: flex;
      align-items: flex-start;
      gap: 16px; /* Espacio entre el título y el siguiente elemento */
    }
    .notification-subtitle-container {
      display: flex;
      align-items: flex-start;
      gap: 24px; /* Espacio entre el subtítulo y el enlace */
      padding-right: 0px;
      flex: 1 0 0; /* Flexibilidad del contenedor */
      margin-left:16px;
    }
    
    .notification-link-container {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left:24px;
   
    }
    smallicon,
    .smallSpace {
      width: var(--notification-icon-size);
      height: var(--notification-icon-size);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: var(--notification-icon-border-radius);
    }
    
    .smallicon {
      width: var(--notification-icon-size);  /* 24px */
      height: var(--notification-icon-size); /* 24px */
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: var(--notification-icon-border-radius);
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


   .notification-title {                                                                                                                              
    
      color: var(--basic-white, #FFF); /* Color actualizado según tu especificación */
      font-family: Inter; /* Inter, como se especificó */
      font-size: 16px; /* Tamaño de fuente especificado */
      font-style: normal;
      font-weight: 700; /* Peso de fuente en negrita */
      line-height: 26px; /* Altura de línea especificada */
      letter-spacing: 0.019px; /* Espaciado de letras especificado */
    margin-left:16px ;
    }
    
    .notification-subtitle {
      color: var(--textual-basic-light, #FCFCFC);
      font-family: Inter;
      font-size: var(--notification-title-font-size);
      line-height: 26px;
      margin: 0;
      
    }
    
    .notification-link {
      display: flex;
      justify-content: center; /* Centra el contenido horizontalmente */
      align-items: center; /* Centra el contenido verticalmente */
      margin-left:8px;
        /* Estilos de tipografía específicos */
        color: var(--basic-white, #FFF); /* Color del texto */
        font-family: Inter; /* Tipo de letra */
        font-size: 16px; /* Tamaño de fuente */
        font-style: normal;
        font-weight: 400; /* Peso de la fuente */
        line-height: 26px; /* Altura de línea */
        letter-spacing: 0.019px; /* Espaciado entre letras */
        text-decoration-line: underline; /* Subrayado */
    }
        
    .notification-link:hover {
      color: var(--primary-500, #046080);
      text-decoration: none;
    }
    
    .close-btn {
      position: absolute;
      top: 50%; /* Centra verticalmente */
      right: 40px; /* Mantiene el botón a la derecha, ajusta según sea necesario */
      transform: translateY(-50%); /* Ajusta la posición vertical para un centrado perfecto */
      width: 24px;
      height: 24px;
      background-color: transparent;
      background-size: 100% 100%;
      border: none;
      cursor: pointer;
      padding: 0;
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

.newtest {
  color:green !important;
}


.notification-subtitle, .notification-link {
  display: flex;
  align-items: center;
  position: relative;
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
.notification-title, .notification-subtitle, .notification-link {
  color: var(--notification-text-color); // Aplica el color del texto
}
.close-btn:focus {
  box-shadow: 0 0 10px 6px rgba(0, 188, 212, 0.9); /* Mayor difuminación y extensión para el estado de focus */
  border-radius: 0; /* Elimina el redondeo para tener esquinas cuadradas 
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
    console.log(this.showInteractiveLink);

    let notificationBanner;

    let link;
    if (this.tipoNotificacion === "warning") {


      link =
        html`
        <sdss-link 
      size="regular"
      link-role="link"
      href="#"
      title="descripción"
      !darkBackground
     >
    Interactive Link
    </sdss-link>
      `;


      if (!this.showInteractiveLink) {

        notificationBanner = html`
        <notification-mobile-banner
          class="mobile-banner"
          !showInteractiveLink
          tipoNotificacion="warning"
          colorBottomSolid="#E58100"
          customBackgroundColor="rgba(255, 233, 204, 1);"
          style="--notification-text-color:#030303"
        >
        </notification-mobile-banner>
      `;

      } else {
        notificationBanner = html`
        <notification-mobile-banner
          class="mobile-banner"
          showInteractiveLink
          tipoNotificacion="warning"
          colorBottomSolid="#E58100"
          customBackgroundColor="rgba(255, 233, 204, 1);"
          style="--notification-text-color:#030303"
        >
        </notification-mobile-banner>
      `;
      }
    } else {

      link =
        html`
        <sdss-link 
      size="regular"
      link-role="link"
      href="#"
      title="descripción"
      darkBackground
     >
    Interactive Link
    </sdss-link>
      `;

      if (!this.showInteractiveLink) {

        notificationBanner = html`
        <notification-mobile-banner
          class="mobile-banner"
          !showInteractiveLink
          colorBottomSolid="#191919"
          tipoNotificacion="information"
        >
        </notification-mobile-banner>
      `;
      } else {

        notificationBanner = html`
        <notification-mobile-banner
          class="mobile-banner"
          showInteractiveLink
          colorBottomSolid="#191919"
          tipoNotificacion="information"
        >
        </notification-mobile-banner>
      `;

      }

    }

    let icon = success();
    let backgroundIcon = backgroundSuccess();
    let closeImgBtn = btncloseBannerInformationIcon();

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

    if (this.showInteractiveLink === "undefined") {

      console.log("es indefinido");
    }

    return html`
   
      ${notificationBanner}
    
      <div class="non-mobile-content">
        <div
          class="notification"
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
            ${link}
            </div>`
        : html``
      }
          </div>
          <button class="close-btn" @click="${this.closeNotification}">
            ${closeImgBtn}
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define("notification-web-banner", notificationWebBanner);

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
        text-decoration: none; /* Elimina el subrayado al hacer hover si lo deseas */
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
    let link;
    if (this.tipoNotificacion === "warning") {


      link =
        html`
        <sdss-link 
      size="regular"
      link-role="link"
      href="#"
      title="descripción"
      !darkBackground
     >
    Interactive Link
    </sdss-link>
      `;
      }else{
        link =
        html`
        <sdss-link 
      size="regular"
      link-role="link"
      href="#"
      title="descripción"
      darkBackground
     >
    Interactive Link
    </sdss-link>
      `;

      }

    const boxShadowStyle =
      this.displayStyle === "inline" ? "none" : "var(--elevation-LG)";

    if (!this.isVisible) {
      return html``;
    }
    const borderBottomStyle = `2px solid ${this.colorBottomSolid}`; // Color por defecto si no se provee colorBottomSolid

    return html`
      <div
        class="${notificationClasses}"
        style="background-color: ${this
        .customBackgroundColor}; box-shadow: ${boxShadowStyle}; border-bottom: ${borderBottomStyle};"
      >
        <div class="notification-content">
          <div class="notification-title-container">
            <div
              class="smallicon"
            
            >
              <div class="svg-background">${backgroundIcon}</div>
              <div class="svg-foreground">${icon}</div>
            </div>

            <div class="notification-title">${this.notification.title}</div>
          </div>

          <div class="notification-subtitle">${this.notification.text}</div>
          ${this.showInteractiveLink
        ? html`  <div class="notification-link">
            ${link}
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
