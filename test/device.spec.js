const DeviceDetector = require("../src/device");
const expect = require('chai').expect;

const desktopAgent = 'mozilla/5.0 (x11; linux x86_64) applewebkit/537.36 (khtml, like gecko) chrome/60.0.3112.78 safari/537.36';
const ipadAgent = 'mozilla/5.0 (ipad; cpu os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko) version/9.0 mobile/13b143 safari/601.1';
const iphoneAgent = 'mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko) version/9.0 mobile/13b143 safari/601.1';
const androidAgent = 'mozilla/5.0 (linux; android 6.0; nexus 5 build/mra58n) applewebkit/537.36 (khtml, like gecko) chrome/60.0.3112.78 mobile safari/537.36';
const tabletAgent = 'mozilla/5.0 (linux; u; en-us; kfapwi build/jdq39) applewebkit/535.19 (khtml, like gecko) silk/3.13 safari/535.19 silk-accelerated=true';
const ie = 'mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/52.0.2743.116 safari/537.36 edge/15.15063';

describe('device test', () => {

    it('isDesktop', () => {
        let device = DeviceDetector.fromUserAgent(desktopAgent);
        let isDesktop = device.isDesktop;
        let isTablet = device.isTablet;
        let isMobile = device.isMobile;
        expect(isDesktop).equals(true);
        expect(isTablet).equals(false);
        expect(isMobile).equals(false);
    });

    it('isTablet', () => {
        let device = DeviceDetector.fromUserAgent(tabletAgent);
        let isDesktop = device.isDesktop;
        let isTablet = device.isTablet;
        let isMobile = device.isMobile;
        expect(isDesktop).equals(false);
        expect(isTablet).equals(true);
        expect(isMobile).equals(false);
    });

    it('isMobile', () => {
        let device = DeviceDetector.fromUserAgent(iphoneAgent);
        let isDesktop = device.isDesktop;
        let isTablet = device.isTablet;
        let isMobile = device.isMobile;
        expect(isDesktop).equals(false);
        expect(isTablet).equals(false);
        expect(isMobile).equals(true);
    });

});

describe('Operating systems test', () => {

    it('isIphone', () => {
        let device = DeviceDetector.fromUserAgent(iphoneAgent);
        let isIphone = device.isIphone;
        let isIpad = device.isIpad;
        let isIOS = device.isIOS;
        let isAndroid = device.isAndroid;
        expect(isIphone).equals(true);
        expect(isIpad).equals(false);
        expect(isIOS).equals(true);
        expect(isAndroid).equals(false);
    });

    it('isIpad', () => {
        let device = DeviceDetector.fromUserAgent(ipadAgent);
        let isIphone = device.isIphone;
        let isIpad = device.isIpad;
        let isIOS = device.isIOS;
        let isAndroid = device.isAndroid;
        expect(isIphone).equals(false);
        expect(isIpad).equals(true);
        expect(isIOS).equals(true);
        expect(isAndroid).equals(false);
    });

    it('isIOS', () => {
        let device = DeviceDetector.fromUserAgent(iphoneAgent);
        let isIOS = device.isIOS;
        let isAndroid = device.isAndroid;
        expect(isIOS).equals(true);
        expect(isAndroid).equals(false);
    });

    it('isAndroid', () => {
        let device = DeviceDetector.fromUserAgent(androidAgent);
        let isIphone = device.isIphone;
        let isIpad = device.isIpad;
        let isIOS = device.isIOS;
        let isAndroid = device.isAndroid;
        expect(isIphone).equals(false);
        expect(isIpad).equals(false);
        expect(isIOS).equals(false);
        expect(isAndroid).equals(true);
    });

});

describe('Versions test', () => {

    it('androidVersion', () => {
        let device = DeviceDetector.fromUserAgent(androidAgent);
        let androidVersion = device.androidVersion;
        expect(androidVersion).equals('6.0');
    });

    it('iOSVersion', () => {
        let device = DeviceDetector.fromUserAgent(iphoneAgent);
        let iOSVersion = device.iOSVersion;
        expect(iOSVersion).equals(9.1);
    });

    it('ieVersion', () => {
        let device = DeviceDetector.fromUserAgent(ie);
        let ieVersion = device.ieVersion;
        expect(ieVersion).equals(15);
    });

});