import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSettingsRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSettingsRound: ForwardRefExoticComponent<ChatSettingsRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatSettingsRound;
export { ChatSettingsRound };
