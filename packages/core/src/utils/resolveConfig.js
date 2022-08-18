const cosmiconfig = require('cosmiconfig');
// import cosmiconfig from 'cosmiconfig';
export function getConfig(configPath, searchPath = process.cwd()) {
  const useCustomPath = !!configPath;
  const explorer = cosmiconfig('bean-ui', { sync: true });

  try {
    const searchPathAbsolute = !useCustomPath && searchPath;
    const configPathAbsolute = useCustomPath && path.join(process.cwd(), configPath);
    // search from the root of the process if the user didnt specify a config file,
    // or use the custom path if a file is passed.
    const result = explorer.load(searchPathAbsolute, configPathAbsolute);

    // dont throw if the explorer didnt find a configfile,
    // instead use default config
    const config = result ? result.config : {};
    const filepath = result ? result.filepath : {};
    if (!result) Logger.log('No config file detected, using defaults.');

    console.log(config, filepath);

    return { ...config, filepath };
  } catch (error) {
    Logger.error(
      'An error occured while parsing your config file. Using defaults...\n\n',
      error.message,
    );
  }
  return {};
}
