import './notificationWebBanner';
import { html } from 'lit-element';

export default {
  title: 'Objetos de diseño/Componentes/notification',
  component: 'notification-web-banner',
  argTypes: {
    isVisible: { 
      control: { type: 'boolean' },
      defaultValue: true,
    },
    tipoNotificacion: {
      control: { type: 'inline-radio', options: ['information', 'warning'] },
    },

    showInteractiveLink: { 
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
};

const backgroundColorMap = {
  'information': '#4C4C4C',
  'warning': 'rgba(255, 233, 204, 1);',
};

const textColorMap = {
  'information': '#FCFCFC',
  'warning': '#030303',
};


const colorBottomMap = {
  'information': '#191919',
  'warning': '#E58100',
};


const Template = ({ isVisible, tipoNotificacion,  showInteractiveLink }) => {
  const selectedBackgroundColor = backgroundColorMap[tipoNotificacion] || '#4C4C4C';
  const selectedTextColor = textColorMap[tipoNotificacion] || '#FFFFFF'; // Color de texto predeterminado
  const colorButtom = colorBottomMap[tipoNotificacion] || './img/closebannerInformation.svg'; // Imagen de cierre predeterminada

  return html`
    <notification-web-banner
      .customBackgroundColor=${selectedBackgroundColor}
      .notification=${{
          title: 'Title',
          text: 'Subtitle',
          interactiveLink: 'Interactive Link'
        }}

      .tipoNotificacion=${tipoNotificacion}
      .isVisible=${isVisible}
      .colorBottomSolid=${colorButtom}
      .showInteractiveLink=${showInteractiveLink}
      style="
        --notification-background: ${selectedBackgroundColor};
        --notification-text-color: ${selectedTextColor}; // Establece el color del texto dinámicamente
        --notification-link-color: #1A7F37;
        --notification-icon-bg-color: rgb(42, 79, 67);

      "
    ></notification-web-banner>
  `;
};

export const Banner = Template.bind({});
Banner.args = {
  isVisible: true,
  tipoNotificacion: 'information',
  showInteractiveLink: true,
};
