import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatVoicemailBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatVoicemailBoxy: ForwardRefExoticComponent<ChatVoicemailBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatVoicemailBoxy;
export { ChatVoicemailBoxy };
