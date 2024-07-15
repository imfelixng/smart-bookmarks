// vite.config.ts
import react from "file:///Users/felix/Desktop/workspaces/personal/smart-bookmarks/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import fs from "fs";
import { defineConfig } from "file:///Users/felix/Desktop/workspaces/personal/smart-bookmarks/node_modules/vite/dist/node/index.js";
import { crx } from "file:///Users/felix/Desktop/workspaces/personal/smart-bookmarks/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// manifest.json
var manifest_default = {
  manifest_version: 3,
  name: "Smart Bookmarks",
  description: "An easy way to find relevant bookmarks on search engines",
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: {
      "32": "icon32.png"
    }
  },
  icons: {
    "128": "icon128.png"
  },
  permissions: [
    "bookmarks",
    "readingList"
  ],
  content_scripts: [
    {
      matches: [
        "http://www.google.com/*",
        "https://www.google.com/*",
        "http://www.google.ad/*",
        "https://www.google.ad/*",
        "http://www.google.ae/*",
        "https://www.google.ae/*",
        "http://www.google.com.af/*",
        "https://www.google.com.af/*",
        "http://www.google.com.ag/*",
        "https://www.google.com.ag/*",
        "http://www.google.com.ai/*",
        "https://www.google.com.ai/*",
        "http://www.google.am/*",
        "https://www.google.am/*",
        "http://www.google.co.ao/*",
        "https://www.google.co.ao/*",
        "http://www.google.com.ar/*",
        "https://www.google.com.ar/*",
        "http://www.google.as/*",
        "https://www.google.as/*",
        "http://www.google.at/*",
        "https://www.google.at/*",
        "http://www.google.com.au/*",
        "https://www.google.com.au/*",
        "http://www.google.az/*",
        "https://www.google.az/*",
        "http://www.google.ba/*",
        "https://www.google.ba/*",
        "http://www.google.com.bd/*",
        "https://www.google.com.bd/*",
        "http://www.google.be/*",
        "https://www.google.be/*",
        "http://www.google.bf/*",
        "https://www.google.bf/*",
        "http://www.google.bg/*",
        "https://www.google.bg/*",
        "http://www.google.com.bh/*",
        "https://www.google.com.bh/*",
        "http://www.google.bi/*",
        "https://www.google.bi/*",
        "http://www.google.bj/*",
        "https://www.google.bj/*",
        "http://www.google.com.bn/*",
        "https://www.google.com.bn/*",
        "http://www.google.com.bo/*",
        "https://www.google.com.bo/*",
        "http://www.google.com.br/*",
        "https://www.google.com.br/*",
        "http://www.google.bs/*",
        "https://www.google.bs/*",
        "http://www.google.co.bw/*",
        "https://www.google.co.bw/*",
        "http://www.google.by/*",
        "https://www.google.by/*",
        "http://www.google.com.bz/*",
        "https://www.google.com.bz/*",
        "http://www.google.ca/*",
        "https://www.google.ca/*",
        "http://www.google.cd/*",
        "https://www.google.cd/*",
        "http://www.google.cf/*",
        "https://www.google.cf/*",
        "http://www.google.cg/*",
        "https://www.google.cg/*",
        "http://www.google.ch/*",
        "https://www.google.ch/*",
        "http://www.google.ci/*",
        "https://www.google.ci/*",
        "http://www.google.co.ck/*",
        "https://www.google.co.ck/*",
        "http://www.google.cl/*",
        "https://www.google.cl/*",
        "http://www.google.cm/*",
        "https://www.google.cm/*",
        "http://www.google.cn/*",
        "https://www.google.cn/*",
        "http://www.google.com.co/*",
        "https://www.google.com.co/*",
        "http://www.google.co.cr/*",
        "https://www.google.co.cr/*",
        "http://www.google.com.cu/*",
        "https://www.google.com.cu/*",
        "http://www.google.cv/*",
        "https://www.google.cv/*",
        "http://www.google.com.cy/*",
        "https://www.google.com.cy/*",
        "http://www.google.cz/*",
        "https://www.google.cz/*",
        "http://www.google.de/*",
        "https://www.google.de/*",
        "http://www.google.dj/*",
        "https://www.google.dj/*",
        "http://www.google.dk/*",
        "https://www.google.dk/*",
        "http://www.google.dm/*",
        "https://www.google.dm/*",
        "http://www.google.com.do/*",
        "https://www.google.com.do/*",
        "http://www.google.dz/*",
        "https://www.google.dz/*",
        "http://www.google.com.ec/*",
        "https://www.google.com.ec/*",
        "http://www.google.ee/*",
        "https://www.google.ee/*",
        "http://www.google.com.eg/*",
        "https://www.google.com.eg/*",
        "http://www.google.es/*",
        "https://www.google.es/*",
        "http://www.google.com.et/*",
        "https://www.google.com.et/*",
        "http://www.google.fi/*",
        "https://www.google.fi/*",
        "http://www.google.com.fj/*",
        "https://www.google.com.fj/*",
        "http://www.google.fm/*",
        "https://www.google.fm/*",
        "http://www.google.fr/*",
        "https://www.google.fr/*",
        "http://www.google.ga/*",
        "https://www.google.ga/*",
        "http://www.google.ge/*",
        "https://www.google.ge/*",
        "http://www.google.gg/*",
        "https://www.google.gg/*",
        "http://www.google.com.gh/*",
        "https://www.google.com.gh/*",
        "http://www.google.com.gi/*",
        "https://www.google.com.gi/*",
        "http://www.google.gl/*",
        "https://www.google.gl/*",
        "http://www.google.gm/*",
        "https://www.google.gm/*",
        "http://www.google.gp/*",
        "https://www.google.gp/*",
        "http://www.google.gr/*",
        "https://www.google.gr/*",
        "http://www.google.com.gt/*",
        "https://www.google.com.gt/*",
        "http://www.google.gy/*",
        "https://www.google.gy/*",
        "http://www.google.com.hk/*",
        "https://www.google.com.hk/*",
        "http://www.google.hn/*",
        "https://www.google.hn/*",
        "http://www.google.hr/*",
        "https://www.google.hr/*",
        "http://www.google.ht/*",
        "https://www.google.ht/*",
        "http://www.google.hu/*",
        "https://www.google.hu/*",
        "http://www.google.co.id/*",
        "https://www.google.co.id/*",
        "http://www.google.ie/*",
        "https://www.google.ie/*",
        "http://www.google.co.il/*",
        "https://www.google.co.il/*",
        "http://www.google.im/*",
        "https://www.google.im/*",
        "http://www.google.co.in/*",
        "https://www.google.co.in/*",
        "http://www.google.iq/*",
        "https://www.google.iq/*",
        "http://www.google.is/*",
        "https://www.google.is/*",
        "http://www.google.it/*",
        "https://www.google.it/*",
        "http://www.google.je/*",
        "https://www.google.je/*",
        "http://www.google.com.jm/*",
        "https://www.google.com.jm/*",
        "http://www.google.jo/*",
        "https://www.google.jo/*",
        "http://www.google.co.jp/*",
        "https://www.google.co.jp/*",
        "http://www.google.co.ke/*",
        "https://www.google.co.ke/*",
        "http://www.google.com.kh/*",
        "https://www.google.com.kh/*",
        "http://www.google.ki/*",
        "https://www.google.ki/*",
        "http://www.google.kg/*",
        "https://www.google.kg/*",
        "http://www.google.co.kr/*",
        "https://www.google.co.kr/*",
        "http://www.google.com.kw/*",
        "https://www.google.com.kw/*",
        "http://www.google.kz/*",
        "https://www.google.kz/*",
        "http://www.google.la/*",
        "https://www.google.la/*",
        "http://www.google.com.lb/*",
        "https://www.google.com.lb/*",
        "http://www.google.li/*",
        "https://www.google.li/*",
        "http://www.google.lk/*",
        "https://www.google.lk/*",
        "http://www.google.co.ls/*",
        "https://www.google.co.ls/*",
        "http://www.google.lt/*",
        "https://www.google.lt/*",
        "http://www.google.lu/*",
        "https://www.google.lu/*",
        "http://www.google.lv/*",
        "https://www.google.lv/*",
        "http://www.google.com.ly/*",
        "https://www.google.com.ly/*",
        "http://www.google.co.ma/*",
        "https://www.google.co.ma/*",
        "http://www.google.md/*",
        "https://www.google.md/*",
        "http://www.google.me/*",
        "https://www.google.me/*",
        "http://www.google.mg/*",
        "https://www.google.mg/*",
        "http://www.google.mk/*",
        "https://www.google.mk/*",
        "http://www.google.ml/*",
        "https://www.google.ml/*",
        "http://www.google.mn/*",
        "https://www.google.mn/*",
        "http://www.google.ms/*",
        "https://www.google.ms/*",
        "http://www.google.com.mt/*",
        "https://www.google.com.mt/*",
        "http://www.google.mu/*",
        "https://www.google.mu/*",
        "http://www.google.mv/*",
        "https://www.google.mv/*",
        "http://www.google.mw/*",
        "https://www.google.mw/*",
        "http://www.google.com.mx/*",
        "https://www.google.com.mx/*",
        "http://www.google.com.my/*",
        "https://www.google.com.my/*",
        "http://www.google.co.mz/*",
        "https://www.google.co.mz/*",
        "http://www.google.com.na/*",
        "https://www.google.com.na/*",
        "http://www.google.com.nf/*",
        "https://www.google.com.nf/*",
        "http://www.google.com.ng/*",
        "https://www.google.com.ng/*",
        "http://www.google.com.ni/*",
        "https://www.google.com.ni/*",
        "http://www.google.ne/*",
        "https://www.google.ne/*",
        "http://www.google.nl/*",
        "https://www.google.nl/*",
        "http://www.google.no/*",
        "https://www.google.no/*",
        "http://www.google.com.np/*",
        "https://www.google.com.np/*",
        "http://www.google.nr/*",
        "https://www.google.nr/*",
        "http://www.google.nu/*",
        "https://www.google.nu/*",
        "http://www.google.co.nz/*",
        "https://www.google.co.nz/*",
        "http://www.google.com.om/*",
        "https://www.google.com.om/*",
        "http://www.google.com.pa/*",
        "https://www.google.com.pa/*",
        "http://www.google.com.pe/*",
        "https://www.google.com.pe/*",
        "http://www.google.com.ph/*",
        "https://www.google.com.ph/*",
        "http://www.google.com.pk/*",
        "https://www.google.com.pk/*",
        "http://www.google.pl/*",
        "https://www.google.pl/*",
        "http://www.google.pn/*",
        "https://www.google.pn/*",
        "http://www.google.com.pr/*",
        "https://www.google.com.pr/*",
        "http://www.google.ps/*",
        "https://www.google.ps/*",
        "http://www.google.pt/*",
        "https://www.google.pt/*",
        "http://www.google.com.py/*",
        "https://www.google.com.py/*",
        "http://www.google.com.qa/*",
        "https://www.google.com.qa/*",
        "http://www.google.ro/*",
        "https://www.google.ro/*",
        "http://www.google.ru/*",
        "https://www.google.ru/*",
        "http://www.google.rw/*",
        "https://www.google.rw/*",
        "http://www.google.com.sa/*",
        "https://www.google.com.sa/*",
        "http://www.google.com.sb/*",
        "https://www.google.com.sb/*",
        "http://www.google.sc/*",
        "https://www.google.sc/*",
        "http://www.google.se/*",
        "https://www.google.se/*",
        "http://www.google.com.sg/*",
        "https://www.google.com.sg/*",
        "http://www.google.sh/*",
        "https://www.google.sh/*",
        "http://www.google.si/*",
        "https://www.google.si/*",
        "http://www.google.sk/*",
        "https://www.google.sk/*",
        "http://www.google.com.sl/*",
        "https://www.google.com.sl/*",
        "http://www.google.sn/*",
        "https://www.google.sn/*",
        "http://www.google.so/*",
        "https://www.google.so/*",
        "http://www.google.sm/*",
        "https://www.google.sm/*",
        "http://www.google.st/*",
        "https://www.google.st/*",
        "http://www.google.com.sv/*",
        "https://www.google.com.sv/*",
        "http://www.google.td/*",
        "https://www.google.td/*",
        "http://www.google.tg/*",
        "https://www.google.tg/*",
        "http://www.google.co.th/*",
        "https://www.google.co.th/*",
        "http://www.google.com.tj/*",
        "https://www.google.com.tj/*",
        "http://www.google.tk/*",
        "https://www.google.tk/*",
        "http://www.google.tl/*",
        "https://www.google.tl/*",
        "http://www.google.tm/*",
        "https://www.google.tm/*",
        "http://www.google.tn/*",
        "https://www.google.tn/*",
        "http://www.google.to/*",
        "https://www.google.to/*",
        "http://www.google.com.tr/*",
        "https://www.google.com.tr/*",
        "http://www.google.tt/*",
        "https://www.google.tt/*",
        "http://www.google.com.tw/*",
        "https://www.google.com.tw/*",
        "http://www.google.co.tz/*",
        "https://www.google.co.tz/*",
        "http://www.google.com.ua/*",
        "https://www.google.com.ua/*",
        "http://www.google.co.ug/*",
        "https://www.google.co.ug/*",
        "http://www.google.co.uk/*",
        "https://www.google.co.uk/*",
        "http://www.google.com.uy/*",
        "https://www.google.com.uy/*",
        "http://www.google.co.uz/*",
        "https://www.google.co.uz/*",
        "http://www.google.com.vc/*",
        "https://www.google.com.vc/*",
        "http://www.google.co.ve/*",
        "https://www.google.co.ve/*",
        "http://www.google.vg/*",
        "https://www.google.vg/*",
        "http://www.google.co.vi/*",
        "https://www.google.co.vi/*",
        "http://www.google.com.vn/*",
        "https://www.google.com.vn/*",
        "http://www.google.vu/*",
        "https://www.google.vu/*",
        "http://www.google.ws/*",
        "https://www.google.ws/*",
        "http://www.google.rs/*",
        "https://www.google.rs/*",
        "http://www.google.co.za/*",
        "https://www.google.co.za/*",
        "http://www.google.co.zm/*",
        "https://www.google.co.zm/*",
        "http://www.google.co.zw/*",
        "https://www.google.co.zw/*",
        "http://www.google.cat/*",
        "https://www.google.cat/*"
      ],
      js: [
        "src/pages/content/index.tsx"
      ],
      css: [
        "contentStyle.css"
      ]
    }
  ],
  web_accessible_resources: [
    {
      resources: [
        "contentStyle.css",
        "icon128.png",
        "icon32.png"
      ],
      matches: []
    }
  ]
};

// manifest.dev.json
var manifest_dev_default = {
  action: {
    default_icon: "public/icon32.png",
    default_popup: "src/pages/popup/index.html"
  },
  icons: {
    "128": "public/icon128.png"
  },
  web_accessible_resources: [
    {
      resources: [
        "contentStyle.css",
        "icon128.png",
        "icon32.png"
      ],
      matches: []
    }
  ]
};

// package.json
var package_default = {
  name: "smart-bookmarks",
  version: "1.0.0",
  description: "An easy way to find relevant bookmarks on search engines.",
  license: "MIT",
  repository: {
    type: "git",
    url: "https://github.com/imfelixng/smart-bookmarks.git"
  },
  scripts: {
    build: "vite build",
    dev: "nodemon"
  },
  type: "module",
  dependencies: {
    "@radix-ui/react-switch": "^1.1.0",
    clsx: "^2.1.1",
    react: "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.4.0",
    "webextension-polyfill": "^0.11.0"
  },
  devDependencies: {
    "@crxjs/vite-plugin": "^2.0.0-beta.23",
    "@types/chrome": "^0.0.268",
    "@types/node": "^20.12.11",
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.0",
    "@types/webextension-polyfill": "^0.10.7",
    "@typescript-eslint/eslint-plugin": "^7.8.0",
    "@typescript-eslint/parser": "^7.8.0",
    "@vitejs/plugin-react": "^4.2.1",
    autoprefixer: "^10.4.19",
    eslint: "^8.57.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsx-a11y": "^6.8.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.2",
    "fs-extra": "^11.2.0",
    nodemon: "^3.1.0",
    postcss: "^8.4.38",
    tailwindcss: "^3.4.3",
    "ts-node": "^10.9.2",
    typescript: "^5.4.5",
    vite: "^5.2.11"
  }
};

// vite.config.ts
var __vite_injected_original_dirname = "/Users/felix/Desktop/workspaces/personal/smart-bookmarks";
var root = resolve(__vite_injected_original_dirname, "src");
var pagesDir = resolve(root, "pages");
var assetsDir = resolve(root, "assets");
var componentsDir = resolve(root, "components");
var utilsDir = resolve(root, "utils");
var hooksDir = resolve(root, "hooks");
var outDir = resolve(__vite_injected_original_dirname, "dist");
var publicDir = resolve(__vite_injected_original_dirname, "public");
var isDev = process.env.__DEV__ === "true";
var extensionManifest = {
  ...manifest_default,
  ...isDev ? manifest_dev_default : {},
  name: isDev ? `DEV: ${manifest_default.name}` : manifest_default.name,
  version: package_default.version
};
function stripDevIcons(apply) {
  if (apply)
    return null;
  return {
    name: "strip-dev-icons",
    resolveId(source) {
      return source === "virtual-module" ? source : null;
    },
    renderStart(outputOptions, inputOptions) {
      const outDir2 = outputOptions.dir;
      fs.rm(
        resolve(outDir2, "dev-icon-32.png"),
        () => console.log(`Deleted dev-icon-32.png frm prod build`)
      );
      fs.rm(
        resolve(outDir2, "dev-icon-128.png"),
        () => console.log(`Deleted dev-icon-128.png frm prod build`)
      );
    }
  };
}
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir,
      "@components": componentsDir,
      "@utils": utilsDir,
      "@hooks": hooksDir
    }
  },
  plugins: [
    react(),
    crx({
      manifest: extensionManifest,
      contentScripts: {
        injectCss: true
      }
    }),
    stripDevIcons(isDev)
  ],
  publicDir,
  build: {
    outDir,
    sourcemap: isDev,
    emptyOutDir: !isDev
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAibWFuaWZlc3QuanNvbiIsICJtYW5pZmVzdC5kZXYuanNvbiIsICJwYWNrYWdlLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZmVsaXgvRGVza3RvcC93b3Jrc3BhY2VzL3BlcnNvbmFsL3NtYXJ0LWJvb2ttYXJrc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2ZlbGl4L0Rlc2t0b3Avd29ya3NwYWNlcy9wZXJzb25hbC9zbWFydC1ib29rbWFya3Mvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ZlbGl4L0Rlc2t0b3Avd29ya3NwYWNlcy9wZXJzb25hbC9zbWFydC1ib29rbWFya3Mvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyBjcngsIE1hbmlmZXN0VjNFeHBvcnQgfSBmcm9tIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCI7XG5cbmltcG9ydCBtYW5pZmVzdCBmcm9tIFwiLi9tYW5pZmVzdC5qc29uXCI7XG5pbXBvcnQgZGV2TWFuaWZlc3QgZnJvbSBcIi4vbWFuaWZlc3QuZGV2Lmpzb25cIjtcbmltcG9ydCBwa2cgZnJvbSBcIi4vcGFja2FnZS5qc29uXCI7XG5cbmNvbnN0IHJvb3QgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIik7XG5jb25zdCBwYWdlc0RpciA9IHJlc29sdmUocm9vdCwgXCJwYWdlc1wiKTtcbmNvbnN0IGFzc2V0c0RpciA9IHJlc29sdmUocm9vdCwgXCJhc3NldHNcIik7XG5jb25zdCBjb21wb25lbnRzRGlyID0gcmVzb2x2ZShyb290LCBcImNvbXBvbmVudHNcIik7XG5jb25zdCB1dGlsc0RpciA9IHJlc29sdmUocm9vdCwgXCJ1dGlsc1wiKTtcbmNvbnN0IGhvb2tzRGlyID0gcmVzb2x2ZShyb290LCBcImhvb2tzXCIpO1xuXG5jb25zdCBvdXREaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJkaXN0XCIpO1xuY29uc3QgcHVibGljRGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsIFwicHVibGljXCIpO1xuXG5jb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Ll9fREVWX18gPT09IFwidHJ1ZVwiO1xuXG5jb25zdCBleHRlbnNpb25NYW5pZmVzdCA9IHtcbiAgLi4ubWFuaWZlc3QsXG4gIC4uLihpc0RldiA/IGRldk1hbmlmZXN0IDogKHt9IGFzIE1hbmlmZXN0VjNFeHBvcnQpKSxcbiAgbmFtZTogaXNEZXYgPyBgREVWOiAke21hbmlmZXN0Lm5hbWV9YCA6IG1hbmlmZXN0Lm5hbWUsXG4gIHZlcnNpb246IHBrZy52ZXJzaW9uLFxufTtcblxuLy8gcGx1Z2luIHRvIHJlbW92ZSBkZXYgaWNvbnMgZnJvbSBwcm9kIGJ1aWxkXG5mdW5jdGlvbiBzdHJpcERldkljb25zKGFwcGx5OiBib29sZWFuKSB7XG4gIGlmIChhcHBseSkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcInN0cmlwLWRldi1pY29uc1wiLFxuICAgIHJlc29sdmVJZChzb3VyY2U6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHNvdXJjZSA9PT0gXCJ2aXJ0dWFsLW1vZHVsZVwiID8gc291cmNlIDogbnVsbDtcbiAgICB9LFxuICAgIHJlbmRlclN0YXJ0KG91dHB1dE9wdGlvbnM6IGFueSwgaW5wdXRPcHRpb25zOiBhbnkpIHtcbiAgICAgIGNvbnN0IG91dERpciA9IG91dHB1dE9wdGlvbnMuZGlyO1xuICAgICAgZnMucm0ocmVzb2x2ZShvdXREaXIsIFwiZGV2LWljb24tMzIucG5nXCIpLCAoKSA9PlxuICAgICAgICBjb25zb2xlLmxvZyhgRGVsZXRlZCBkZXYtaWNvbi0zMi5wbmcgZnJtIHByb2QgYnVpbGRgKVxuICAgICAgKTtcbiAgICAgIGZzLnJtKHJlc29sdmUob3V0RGlyLCBcImRldi1pY29uLTEyOC5wbmdcIiksICgpID0+XG4gICAgICAgIGNvbnNvbGUubG9nKGBEZWxldGVkIGRldi1pY29uLTEyOC5wbmcgZnJtIHByb2QgYnVpbGRgKVxuICAgICAgKTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQHNyY1wiOiByb290LFxuICAgICAgXCJAYXNzZXRzXCI6IGFzc2V0c0RpcixcbiAgICAgIFwiQHBhZ2VzXCI6IHBhZ2VzRGlyLFxuICAgICAgXCJAY29tcG9uZW50c1wiOiBjb21wb25lbnRzRGlyLFxuICAgICAgXCJAdXRpbHNcIjogdXRpbHNEaXIsXG4gICAgICBcIkBob29rc1wiOiBob29rc0RpcixcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBjcngoe1xuICAgICAgbWFuaWZlc3Q6IGV4dGVuc2lvbk1hbmlmZXN0IGFzIE1hbmlmZXN0VjNFeHBvcnQsXG4gICAgICBjb250ZW50U2NyaXB0czoge1xuICAgICAgICBpbmplY3RDc3M6IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHN0cmlwRGV2SWNvbnMoaXNEZXYpLFxuICBdLFxuICBwdWJsaWNEaXIsXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyLFxuICAgIHNvdXJjZW1hcDogaXNEZXYsXG4gICAgZW1wdHlPdXREaXI6ICFpc0RldixcbiAgfSxcbn0pO1xuIiwgIntcbiAgXCJtYW5pZmVzdF92ZXJzaW9uXCI6IDMsXG4gIFwibmFtZVwiOiBcIlNtYXJ0IEJvb2ttYXJrc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQW4gZWFzeSB3YXkgdG8gZmluZCByZWxldmFudCBib29rbWFya3Mgb24gc2VhcmNoIGVuZ2luZXNcIixcbiAgXCJhY3Rpb25cIjoge1xuICAgIFwiZGVmYXVsdF9wb3B1cFwiOiBcInNyYy9wYWdlcy9wb3B1cC9pbmRleC5odG1sXCIsXG4gICAgXCJkZWZhdWx0X2ljb25cIjoge1xuICAgICAgXCIzMlwiOiBcImljb24zMi5wbmdcIlxuICAgIH1cbiAgfSxcbiAgXCJpY29uc1wiOiB7XG4gICAgXCIxMjhcIjogXCJpY29uMTI4LnBuZ1wiXG4gIH0sXG4gIFwicGVybWlzc2lvbnNcIjogW1xuICAgIFwiYm9va21hcmtzXCIsXG4gICAgXCJyZWFkaW5nTGlzdFwiXG4gIF0sXG4gIFwiY29udGVudF9zY3JpcHRzXCI6IFtcbiAgICB7XG4gICAgICBcIm1hdGNoZXNcIjogW1xuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuYWQvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5hZC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuYWUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5hZS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmFmLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmFmLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uYWcvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uYWcvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5haS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5haS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuYW0vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5hbS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28uYW8vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5hby8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmFyLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmFyLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5hcy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmFzLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5hdC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmF0LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uYXUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uYXUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmF6LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuYXovKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmJhLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuYmEvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5iZC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5iZC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuYmUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5iZS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuYmYvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5iZi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuYmcvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5iZy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmJoLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmJoLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5iaS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmJpLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5iai8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmJqLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uYm4vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uYm4vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5iby8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5iby8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmJyLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmJyLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5icy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmJzLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5idy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLmJ3LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5ieS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmJ5LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uYnovKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uYnovKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNhLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY2EvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNkLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY2QvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNmLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY2YvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNnLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY2cvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNoLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY2gvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNpLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY2kvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLmNrLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28uY2svKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNsLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY2wvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNtLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY20vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNuLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY24vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5jby8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5jby8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28uY3IvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5jci8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmN1LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmN1LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jdi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmN2LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uY3kvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uY3kvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmN6LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY3ovKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmRlLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZGUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmRqLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZGovKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmRrLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZGsvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmRtLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZG0vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5kby8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5kby8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZHovKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5kei8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmVjLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmVjLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5lZS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmVlLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uZWcvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uZWcvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmVzLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZXMvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5ldC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5ldC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZmkvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5maS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmZqLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmZqLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5mbS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmZtLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5mci8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmZyLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5nYS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmdhLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5nZS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmdlLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5nZy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmdnLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uZ2gvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uZ2gvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5naS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5naS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZ2wvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5nbC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZ20vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5nbS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZ3AvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5ncC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZ3IvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5nci8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmd0LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmd0LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5neS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmd5LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uaGsvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uaGsvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmhuLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuaG4vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmhyLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuaHIvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmh0LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuaHQvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmh1LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuaHUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLmlkLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28uaWQvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmllLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuaWUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLmlsLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28uaWwvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmltLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuaW0vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLmluLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28uaW4vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmlxLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuaXEvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmlzLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuaXMvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLml0LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuaXQvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmplLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuamUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5qbS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5qbS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuam8vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5qby8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28uanAvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5qcC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28ua2UvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5rZS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmtoLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmtoLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5raS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmtpLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5rZy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmtnLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5rci8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLmtyLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ua3cvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ua3cvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmt6LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUua3ovKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmxhLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubGEvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5sYi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5sYi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubGkvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5saS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubGsvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5say8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28ubHMvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5scy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubHQvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5sdC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubHUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5sdS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubHYvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5sdi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmx5LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmx5LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5tYS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLm1hLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5tZC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm1kLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5tZS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm1lLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5tZy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm1nLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5tay8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm1rLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5tbC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm1sLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5tbi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm1uLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5tcy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm1zLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ubXQvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ubXQvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm11LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubXUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm12LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubXYvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm13LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubXcvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5teC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5teC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLm15LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLm15LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5tei8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLm16LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ubmEvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ubmEvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5uZi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5uZi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLm5nLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLm5nLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ubmkvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ubmkvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm5lLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubmUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm5sLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubmwvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm5vLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubm8vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5ucC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5ucC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubnIvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5uci8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubnUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5udS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28ubnovKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5uei8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLm9tLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLm9tLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ucGEvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ucGEvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5wZS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5wZS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnBoLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnBoLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ucGsvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ucGsvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnBsLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUucGwvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnBuLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUucG4vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5wci8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5wci8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUucHMvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5wcy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUucHQvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5wdC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnB5LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnB5LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ucWEvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ucWEvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnJvLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUucm8vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnJ1LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUucnUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnJ3LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUucncvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5zYS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5zYS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnNiLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnNiLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5zYy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnNjLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5zZS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnNlLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uc2cvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uc2cvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnNoLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuc2gvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnNpLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuc2kvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnNrLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuc2svKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5zbC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5zbC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuc24vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5zbi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuc28vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5zby8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuc20vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5zbS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuc3QvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5zdC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnN2LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnN2LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS50ZC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnRkLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS50Zy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnRnLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby50aC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLnRoLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20udGovKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20udGovKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnRrLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUudGsvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnRsLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUudGwvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnRtLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUudG0vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnRuLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUudG4vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnRvLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUudG8vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS50ci8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS50ci8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUudHQvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS50dC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnR3LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnR3LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby50ei8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLnR6LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20udWEvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20udWEvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLnVnLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28udWcvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLnVrLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28udWsvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS51eS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS51eS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28udXovKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby51ei8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnZjLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnZjLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby52ZS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLnZlLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS52Zy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnZnLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby52aS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLnZpLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20udm4vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20udm4vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnZ1LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUudnUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLndzLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUud3MvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnJzLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUucnMvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLnphLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28uemEvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLnptLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28uem0vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLnp3LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28uencvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNhdC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNhdC8qXCJcbiAgICAgIF0sXG4gICAgICBcImpzXCI6IFtcbiAgICAgICAgXCJzcmMvcGFnZXMvY29udGVudC9pbmRleC50c3hcIlxuICAgICAgXSxcbiAgICAgIFwiY3NzXCI6IFtcbiAgICAgICAgXCJjb250ZW50U3R5bGUuY3NzXCJcbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIFwid2ViX2FjY2Vzc2libGVfcmVzb3VyY2VzXCI6IFtcbiAgICB7XG4gICAgICBcInJlc291cmNlc1wiOiBbXG4gICAgICAgIFwiY29udGVudFN0eWxlLmNzc1wiLFxuICAgICAgICBcImljb24xMjgucG5nXCIsXG4gICAgICAgIFwiaWNvbjMyLnBuZ1wiXG4gICAgICBdLFxuICAgICAgXCJtYXRjaGVzXCI6IFtdXG4gICAgfVxuICBdXG59IiwgIntcbiAgXCJhY3Rpb25cIjoge1xuICAgIFwiZGVmYXVsdF9pY29uXCI6IFwicHVibGljL2ljb24zMi5wbmdcIixcbiAgICBcImRlZmF1bHRfcG9wdXBcIjogXCJzcmMvcGFnZXMvcG9wdXAvaW5kZXguaHRtbFwiXG4gIH0sXG4gIFwiaWNvbnNcIjoge1xuICAgIFwiMTI4XCI6IFwicHVibGljL2ljb24xMjgucG5nXCJcbiAgfSxcbiAgXCJ3ZWJfYWNjZXNzaWJsZV9yZXNvdXJjZXNcIjogW1xuICAgIHtcbiAgICAgIFwicmVzb3VyY2VzXCI6IFtcbiAgICAgICAgXCJjb250ZW50U3R5bGUuY3NzXCIsXG4gICAgICAgIFwiaWNvbjEyOC5wbmdcIixcbiAgICAgICAgXCJpY29uMzIucG5nXCJcbiAgICAgIF0sXG4gICAgICBcIm1hdGNoZXNcIjogW11cbiAgICB9XG4gIF1cbn0iLCAie1xuICBcIm5hbWVcIjogXCJzbWFydC1ib29rbWFya3NcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFuIGVhc3kgd2F5IHRvIGZpbmQgcmVsZXZhbnQgYm9va21hcmtzIG9uIHNlYXJjaCBlbmdpbmVzLlwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pbWZlbGl4bmcvc21hcnQtYm9va21hcmtzLmdpdFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZFwiOiBcInZpdGUgYnVpbGRcIixcbiAgICBcImRldlwiOiBcIm5vZGVtb25cIlxuICB9LFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXN3aXRjaFwiOiBcIl4xLjEuMFwiLFxuICAgIFwiY2xzeFwiOiBcIl4yLjEuMVwiLFxuICAgIFwicmVhY3RcIjogXCJeMTguMy4xXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMy4xXCIsXG4gICAgXCJ0YWlsd2luZC1tZXJnZVwiOiBcIl4yLjQuMFwiLFxuICAgIFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI6IFwiXjAuMTEuMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjcnhqcy92aXRlLXBsdWdpblwiOiBcIl4yLjAuMC1iZXRhLjIzXCIsXG4gICAgXCJAdHlwZXMvY2hyb21lXCI6IFwiXjAuMC4yNjhcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjEyLjExXCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMy4xXCIsXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjMuMFwiLFxuICAgIFwiQHR5cGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiOiBcIl4wLjEwLjdcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjcuOC4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjcuOC4wXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiOiBcIl40LjIuMVwiLFxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMTlcIixcbiAgICBcImVzbGludFwiOiBcIl44LjU3LjBcIixcbiAgICBcImVzbGludC1jb25maWctcHJldHRpZXJcIjogXCJeOS4xLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMjkuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1qc3gtYTExeVwiOiBcIl42LjguMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdFwiOiBcIl43LjM0LjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtaG9va3NcIjogXCJeNC42LjJcIixcbiAgICBcImZzLWV4dHJhXCI6IFwiXjExLjIuMFwiLFxuICAgIFwibm9kZW1vblwiOiBcIl4zLjEuMFwiLFxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuMzhcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4zXCIsXG4gICAgXCJ0cy1ub2RlXCI6IFwiXjEwLjkuMlwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjQuNVwiLFxuICAgIFwidml0ZVwiOiBcIl41LjIuMTFcIlxuICB9XG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVixPQUFPLFdBQVc7QUFDNVcsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sUUFBUTtBQUNmLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsV0FBNkI7OztBQ0p0QztBQUFBLEVBQ0Usa0JBQW9CO0FBQUEsRUFDcEIsTUFBUTtBQUFBLEVBQ1IsYUFBZTtBQUFBLEVBQ2YsUUFBVTtBQUFBLElBQ1IsZUFBaUI7QUFBQSxJQUNqQixjQUFnQjtBQUFBLE1BQ2QsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsYUFBZTtBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsaUJBQW1CO0FBQUEsSUFDakI7QUFBQSxNQUNFLFNBQVc7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsSUFBTTtBQUFBLFFBQ0o7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFPO0FBQUEsUUFD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
