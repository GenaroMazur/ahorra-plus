import ApplicationModule from "../share/interfaces/ApplicationModule";

import Server from "./Server";
import {logger} from "../share/utils/logger";

export default class Application implements ApplicationModule {
    private static _instance: Application | null = null;
    public static get instance() {
        if (!this._instance) {
            this._instance = new Application();
        }
        return this._instance;
    }

    private constructor() {
    }

    public Server: null | Server = null;

    public async start(): Promise<void> {
        logger.debug("Starting application...");

        await this.Server?.start();
        logger.info("Application started successfully.");
    }

    public async stop(): Promise<void> {
        logger.debug("Stopping application...");
        await this.Server?.stop();

        logger.info("Application stopped successfully.");
    }
}
