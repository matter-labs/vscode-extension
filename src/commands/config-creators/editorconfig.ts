import { ConfigCreator } from "./helpers";

const config = `# EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs

root = true

[*]
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
indent_style = space
indent_size = 2
`;

export default new ConfigCreator("EditorConfig", config, ".editorconfig");
