import { FakerPokemonService } from './FakerPokemonService';
import { DefaultPokemonService } from './DefaultPokemonService';
import { IPokemonService } from './IPokemonService';

export class PokemonServiceProvider {
    apiEnabled: boolean;
    baseUrl: string;

    constructor() {
        const apiEnabledConfigValue = process.env.REACT_APP_API_ENABLED;
        this.apiEnabled = apiEnabledConfigValue
            ? true // todo: resolve string > bool value properly.
            : false;

        const baseUrlConfigValue = process.env.REACT_APP_API_BASE_URL;
        this.baseUrl = baseUrlConfigValue
            ? baseUrlConfigValue
            : ""; // todo: what's a sensible default??
    }

    getService(): IPokemonService {
        return this.apiEnabled
            ? new DefaultPokemonService(this.baseUrl)
            : new FakerPokemonService();
    }
}
