import { Text, Tooltip } from "@radix-ui/themes";

const ProjectIcon = ({displayName, children}) => {
    return (
      <Tooltip content={displayName}>
        <Text>
          {children}	
        </Text>
      </Tooltip>
    );
};

export default ProjectIcon;