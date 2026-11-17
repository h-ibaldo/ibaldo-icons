import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSettingsFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSettingsFacing: ForwardRefExoticComponent<ChatStackSettingsFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSettingsFacing;
export { ChatStackSettingsFacing };
