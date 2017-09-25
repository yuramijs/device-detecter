class DeviceDetector {

    constructor(agent) {

        if (!('string' === (typeof agent)) || !agent) {
            throw new Error('Invalid agent string provided');
        }

        this.agent = agent.toLowerCase();

    }

    static fromUserAgent(agent) {
        return new this(agent);
    }

    static fromRequest(httpRequest) {
        return this.fromUserAgent(httpRequest.headers['user-agent']);
    }


    get isDesktop() {
        if (!this.isTablet && !this.isMobile) {
            return true;
        }
        return false;
    }

    get isTablet() {
        if (this.agent.match(/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/)) {
            return true;
        }
        return false;
    }

    get isMobile() {
        if (this.agent.match(/(ipod|phone|(android(?!.*mobile))|(.*touch)|sm|blackberry|bb10|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/)) {
            return true;
        }
        return false;
    }

    get isIphone() {
        if (this.agent.match(/(iphone)/)) {
            return true
        }
        return false
    }

    get isIpad() {
        if (this.agent.match(/(ipad)/)) {
            return true;
        }
        return false;
    }

    get isIOS() {
        if (this.agent.match(/(mac)/)) {
            return true;
        }
        return false;
    }

    get isAndroid() {
        if (this.agent.match(/(android)/)) {
            return true;
        }
        return false;
    }

    get androidVersion() {
        let androidVersion = this.agent.match(/android\s([0-9\.]*)/);
        return androidVersion ? androidVersion[1] : false;
    }

    get iOSVersion() {
        return parseFloat(
            ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(this.agent) || [0, ''])[1])
                .replace('undefined', '3_2').replace('_', '.').replace('_', '')
        ) || false;
    }

    get ieVersion() {
        let msie = this.agent.indexOf('msie ');

        if (msie > 0) {
            return parseInt(this.agent.substring(msie + 5, this.agent.indexOf('.', msie)), 10);
        }

        let trident = this.agent.indexOf('trident/');
        if (trident > 0) {
            let rv = this.agent.indexOf('rv:');
            return parseInt(this.agent.substring(rv + 3, this.agent.indexOf('.', rv)), 10);
        }

        let edge = this.agent.indexOf('edge/');
        if (edge > 0) {
            return parseInt(this.agent.substring(edge + 5, this.agent.indexOf('.', edge)), 10);
        }

        return null;
    }

}

module.exports = DeviceDetector;