import { t } from "../../i18n";
import { share } from "../icons";
import { Button } from "../Button";

import clsx from "clsx";

import "./LiveCollaborationTrigger.scss";
import { useUIAppState } from "../../context/ui-appState";

const LiveCollaborationTrigger = ({
  isCollaborating,
  onSelect,
  ...rest
}: {
  isCollaborating: boolean;
  onSelect: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const appState = useUIAppState();

  const showIconOnly = appState.width < 830;

  return (
    <></>
  );
};

export default LiveCollaborationTrigger;
LiveCollaborationTrigger.displayName = "LiveCollaborationTrigger";
