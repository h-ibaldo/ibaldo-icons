import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSettingsSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSettingsSharp: ForwardRefExoticComponent<ChatSettingsSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatSettingsSharp;
export { ChatSettingsSharp };
