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
  background: {
    service_worker: "src/pages/background/index.ts",
    type: "module"
  },
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAibWFuaWZlc3QuanNvbiIsICJtYW5pZmVzdC5kZXYuanNvbiIsICJwYWNrYWdlLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZmVsaXgvRGVza3RvcC93b3Jrc3BhY2VzL3BlcnNvbmFsL3NtYXJ0LWJvb2ttYXJrc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2ZlbGl4L0Rlc2t0b3Avd29ya3NwYWNlcy9wZXJzb25hbC9zbWFydC1ib29rbWFya3Mvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ZlbGl4L0Rlc2t0b3Avd29ya3NwYWNlcy9wZXJzb25hbC9zbWFydC1ib29rbWFya3Mvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyBjcngsIE1hbmlmZXN0VjNFeHBvcnQgfSBmcm9tIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCI7XG5cbmltcG9ydCBtYW5pZmVzdCBmcm9tIFwiLi9tYW5pZmVzdC5qc29uXCI7XG5pbXBvcnQgZGV2TWFuaWZlc3QgZnJvbSBcIi4vbWFuaWZlc3QuZGV2Lmpzb25cIjtcbmltcG9ydCBwa2cgZnJvbSBcIi4vcGFja2FnZS5qc29uXCI7XG5cbmNvbnN0IHJvb3QgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIik7XG5jb25zdCBwYWdlc0RpciA9IHJlc29sdmUocm9vdCwgXCJwYWdlc1wiKTtcbmNvbnN0IGFzc2V0c0RpciA9IHJlc29sdmUocm9vdCwgXCJhc3NldHNcIik7XG5jb25zdCBjb21wb25lbnRzRGlyID0gcmVzb2x2ZShyb290LCBcImNvbXBvbmVudHNcIik7XG5jb25zdCB1dGlsc0RpciA9IHJlc29sdmUocm9vdCwgXCJ1dGlsc1wiKTtcbmNvbnN0IGhvb2tzRGlyID0gcmVzb2x2ZShyb290LCBcImhvb2tzXCIpO1xuXG5jb25zdCBvdXREaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJkaXN0XCIpO1xuY29uc3QgcHVibGljRGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsIFwicHVibGljXCIpO1xuXG5jb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Ll9fREVWX18gPT09IFwidHJ1ZVwiO1xuXG5jb25zdCBleHRlbnNpb25NYW5pZmVzdCA9IHtcbiAgLi4ubWFuaWZlc3QsXG4gIC4uLihpc0RldiA/IGRldk1hbmlmZXN0IDogKHt9IGFzIE1hbmlmZXN0VjNFeHBvcnQpKSxcbiAgbmFtZTogaXNEZXYgPyBgREVWOiAke21hbmlmZXN0Lm5hbWV9YCA6IG1hbmlmZXN0Lm5hbWUsXG4gIHZlcnNpb246IHBrZy52ZXJzaW9uLFxufTtcblxuLy8gcGx1Z2luIHRvIHJlbW92ZSBkZXYgaWNvbnMgZnJvbSBwcm9kIGJ1aWxkXG5mdW5jdGlvbiBzdHJpcERldkljb25zKGFwcGx5OiBib29sZWFuKSB7XG4gIGlmIChhcHBseSkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcInN0cmlwLWRldi1pY29uc1wiLFxuICAgIHJlc29sdmVJZChzb3VyY2U6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHNvdXJjZSA9PT0gXCJ2aXJ0dWFsLW1vZHVsZVwiID8gc291cmNlIDogbnVsbDtcbiAgICB9LFxuICAgIHJlbmRlclN0YXJ0KG91dHB1dE9wdGlvbnM6IGFueSwgaW5wdXRPcHRpb25zOiBhbnkpIHtcbiAgICAgIGNvbnN0IG91dERpciA9IG91dHB1dE9wdGlvbnMuZGlyO1xuICAgICAgZnMucm0ocmVzb2x2ZShvdXREaXIsIFwiZGV2LWljb24tMzIucG5nXCIpLCAoKSA9PlxuICAgICAgICBjb25zb2xlLmxvZyhgRGVsZXRlZCBkZXYtaWNvbi0zMi5wbmcgZnJtIHByb2QgYnVpbGRgKVxuICAgICAgKTtcbiAgICAgIGZzLnJtKHJlc29sdmUob3V0RGlyLCBcImRldi1pY29uLTEyOC5wbmdcIiksICgpID0+XG4gICAgICAgIGNvbnNvbGUubG9nKGBEZWxldGVkIGRldi1pY29uLTEyOC5wbmcgZnJtIHByb2QgYnVpbGRgKVxuICAgICAgKTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQHNyY1wiOiByb290LFxuICAgICAgXCJAYXNzZXRzXCI6IGFzc2V0c0RpcixcbiAgICAgIFwiQHBhZ2VzXCI6IHBhZ2VzRGlyLFxuICAgICAgXCJAY29tcG9uZW50c1wiOiBjb21wb25lbnRzRGlyLFxuICAgICAgXCJAdXRpbHNcIjogdXRpbHNEaXIsXG4gICAgICBcIkBob29rc1wiOiBob29rc0RpcixcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBjcngoe1xuICAgICAgbWFuaWZlc3Q6IGV4dGVuc2lvbk1hbmlmZXN0IGFzIE1hbmlmZXN0VjNFeHBvcnQsXG4gICAgICBjb250ZW50U2NyaXB0czoge1xuICAgICAgICBpbmplY3RDc3M6IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHN0cmlwRGV2SWNvbnMoaXNEZXYpLFxuICBdLFxuICBwdWJsaWNEaXIsXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyLFxuICAgIHNvdXJjZW1hcDogaXNEZXYsXG4gICAgZW1wdHlPdXREaXI6ICFpc0RldixcbiAgfSxcbn0pO1xuIiwgIntcbiAgXCJtYW5pZmVzdF92ZXJzaW9uXCI6IDMsXG4gIFwibmFtZVwiOiBcIlNtYXJ0IEJvb2ttYXJrc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQW4gZWFzeSB3YXkgdG8gZmluZCByZWxldmFudCBib29rbWFya3Mgb24gc2VhcmNoIGVuZ2luZXNcIixcbiAgXCJiYWNrZ3JvdW5kXCI6IHtcbiAgICBcInNlcnZpY2Vfd29ya2VyXCI6IFwic3JjL3BhZ2VzL2JhY2tncm91bmQvaW5kZXgudHNcIixcbiAgICBcInR5cGVcIjogXCJtb2R1bGVcIlxuICB9LFxuICBcImFjdGlvblwiOiB7XG4gICAgXCJkZWZhdWx0X3BvcHVwXCI6IFwic3JjL3BhZ2VzL3BvcHVwL2luZGV4Lmh0bWxcIixcbiAgICBcImRlZmF1bHRfaWNvblwiOiB7XG4gICAgICBcIjMyXCI6IFwiaWNvbjMyLnBuZ1wiXG4gICAgfVxuICB9LFxuICBcImljb25zXCI6IHtcbiAgICBcIjEyOFwiOiBcImljb24xMjgucG5nXCJcbiAgfSxcbiAgXCJwZXJtaXNzaW9uc1wiOiBbXG4gICAgXCJib29rbWFya3NcIixcbiAgICBcInJlYWRpbmdMaXN0XCJcbiAgXSxcbiAgXCJjb250ZW50X3NjcmlwdHNcIjogW1xuICAgIHtcbiAgICAgIFwibWF0Y2hlc1wiOiBbXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5hZC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmFkLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5hZS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmFlLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uYWYvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uYWYvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5hZy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5hZy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmFpLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmFpLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5hbS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmFtLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5hby8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLmFvLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uYXIvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uYXIvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmFzLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuYXMvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmF0LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuYXQvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5hdS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5hdS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuYXovKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5hei8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuYmEvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5iYS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmJkLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmJkLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5iZS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmJlLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5iZi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmJmLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5iZy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmJnLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uYmgvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uYmgvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmJpLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuYmkvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmJqLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuYmovKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5ibi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5ibi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmJvLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmJvLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uYnIvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uYnIvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmJzLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuYnMvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLmJ3LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28uYncvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmJ5LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuYnkvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5iei8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5iei8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY2EvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jYS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY2QvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jZC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY2YvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jZi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY2cvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jZy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY2gvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jaC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY2kvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jaS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28uY2svKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5jay8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY2wvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jbC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY20vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jbS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY24vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jbi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmNvLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmNvLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5jci8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLmNyLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uY3UvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uY3UvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmN2LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY3YvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5jeS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5jeS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY3ovKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jei8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZGUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5kZS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZGovKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5kai8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZGsvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5kay8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZG0vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5kbS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmRvLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmRvLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5kei8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmR6LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uZWMvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uZWMvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmVlLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZWUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5lZy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5lZy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZXMvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5lcy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmV0LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmV0LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5maS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmZpLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uZmovKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uZmovKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmZtLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZm0vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmZyLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZnIvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmdhLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZ2EvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmdlLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZ2UvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmdnLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZ2cvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5naC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5naC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmdpLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmdpLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5nbC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmdsLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5nbS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmdtLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5ncC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmdwLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5nci8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmdyLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uZ3QvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uZ3QvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmd5LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZ3kvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5oay8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5oay8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuaG4vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5obi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuaHIvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5oci8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuaHQvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5odC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuaHUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5odS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28uaWQvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5pZC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuaWUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5pZS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28uaWwvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5pbC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuaW0vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5pbS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28uaW4vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5pbi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuaXEvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5pcS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuaXMvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5pcy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuaXQvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5pdC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuamUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5qZS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmptLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmptLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5qby8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmpvLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5qcC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLmpwLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5rZS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLmtlLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ua2gvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ua2gvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmtpLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUua2kvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmtnLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUua2cvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLmtyLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28ua3IvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5rdy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5rdy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUua3ovKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5rei8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubGEvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5sYS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmxiLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmxiLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5saS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmxpLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5say8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmxrLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5scy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLmxzLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5sdC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmx0LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5sdS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmx1LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5sdi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmx2LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ubHkvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ubHkvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLm1hLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28ubWEvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm1kLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubWQvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm1lLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubWUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm1nLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubWcvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm1rLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubWsvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm1sLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubWwvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm1uLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubW4vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm1zLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubXMvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5tdC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5tdC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubXUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5tdS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubXYvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5tdi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubXcvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5tdy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLm14LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLm14LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ubXkvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ubXkvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLm16LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28ubXovKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5uYS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5uYS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLm5mLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLm5mLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ubmcvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ubmcvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5uaS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5uaS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubmUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5uZS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubmwvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5ubC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubm8vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5uby8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLm5wLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLm5wLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5uci8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm5yLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5udS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm51LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5uei8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLm56LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ub20vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ub20vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5wYS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5wYS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnBlLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnBlLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ucGgvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ucGgvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5way8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5way8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUucGwvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5wbC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUucG4vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5wbi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnByLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnByLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5wcy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnBzLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5wdC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnB0LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ucHkvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ucHkvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5xYS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5xYS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUucm8vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5yby8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUucnUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5ydS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUucncvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5ydy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnNhLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnNhLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uc2IvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uc2IvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnNjLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuc2MvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnNlLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuc2UvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5zZy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5zZy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuc2gvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5zaC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuc2kvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5zaS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuc2svKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5zay8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnNsLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnNsLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5zbi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnNuLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5zby8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnNvLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5zbS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnNtLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5zdC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnN0LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uc3YvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uc3YvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnRkLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUudGQvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnRnLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUudGcvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLnRoLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28udGgvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS50ai8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS50ai8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUudGsvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS50ay8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUudGwvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS50bC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUudG0vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS50bS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUudG4vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS50bi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUudG8vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS50by8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnRyLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnRyLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS50dC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnR0LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20udHcvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20udHcvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLnR6LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28udHovKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS51YS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS51YS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28udWcvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby51Zy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28udWsvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby51ay8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnV5LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnV5LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby51ei8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLnV6LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20udmMvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20udmMvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLnZlLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28udmUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnZnLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUudmcvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLnZpLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28udmkvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS52bi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS52bi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUudnUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS52dS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUud3MvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS53cy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUucnMvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5ycy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28uemEvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby56YS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28uem0vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby56bS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28uencvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby56dy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY2F0LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY2F0LypcIlxuICAgICAgXSxcbiAgICAgIFwianNcIjogW1xuICAgICAgICBcInNyYy9wYWdlcy9jb250ZW50L2luZGV4LnRzeFwiXG4gICAgICBdLFxuICAgICAgXCJjc3NcIjogW1xuICAgICAgICBcImNvbnRlbnRTdHlsZS5jc3NcIlxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgXCJ3ZWJfYWNjZXNzaWJsZV9yZXNvdXJjZXNcIjogW1xuICAgIHtcbiAgICAgIFwicmVzb3VyY2VzXCI6IFtcbiAgICAgICAgXCJjb250ZW50U3R5bGUuY3NzXCIsXG4gICAgICAgIFwiaWNvbjEyOC5wbmdcIixcbiAgICAgICAgXCJpY29uMzIucG5nXCJcbiAgICAgIF0sXG4gICAgICBcIm1hdGNoZXNcIjogW11cbiAgICB9XG4gIF1cbn0iLCAie1xuICBcImFjdGlvblwiOiB7XG4gICAgXCJkZWZhdWx0X2ljb25cIjogXCJwdWJsaWMvaWNvbjMyLnBuZ1wiLFxuICAgIFwiZGVmYXVsdF9wb3B1cFwiOiBcInNyYy9wYWdlcy9wb3B1cC9pbmRleC5odG1sXCJcbiAgfSxcbiAgXCJpY29uc1wiOiB7XG4gICAgXCIxMjhcIjogXCJwdWJsaWMvaWNvbjEyOC5wbmdcIlxuICB9LFxuICBcIndlYl9hY2Nlc3NpYmxlX3Jlc291cmNlc1wiOiBbXG4gICAge1xuICAgICAgXCJyZXNvdXJjZXNcIjogW1xuICAgICAgICBcImNvbnRlbnRTdHlsZS5jc3NcIixcbiAgICAgICAgXCJpY29uMTI4LnBuZ1wiLFxuICAgICAgICBcImljb24zMi5wbmdcIlxuICAgICAgXSxcbiAgICAgIFwibWF0Y2hlc1wiOiBbXVxuICAgIH1cbiAgXVxufSIsICJ7XG4gIFwibmFtZVwiOiBcInNtYXJ0LWJvb2ttYXJrc1wiLFxuICBcInZlcnNpb25cIjogXCIxLjAuMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQW4gZWFzeSB3YXkgdG8gZmluZCByZWxldmFudCBib29rbWFya3Mgb24gc2VhcmNoIGVuZ2luZXMuXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ltZmVsaXhuZy9zbWFydC1ib29rbWFya3MuZ2l0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwidml0ZSBidWlsZFwiLFxuICAgIFwiZGV2XCI6IFwibm9kZW1vblwiXG4gIH0sXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAcmFkaXgtdWkvcmVhY3Qtc3dpdGNoXCI6IFwiXjEuMS4wXCIsXG4gICAgXCJjbHN4XCI6IFwiXjIuMS4xXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOC4zLjFcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4zLjFcIixcbiAgICBcInRhaWx3aW5kLW1lcmdlXCI6IFwiXjIuNC4wXCIsXG4gICAgXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIjogXCJeMC4xMS4wXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCI6IFwiXjIuMC4wLWJldGEuMjNcIixcbiAgICBcIkB0eXBlcy9jaHJvbWVcIjogXCJeMC4wLjI2OFwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTIuMTFcIixcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4zLjFcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMy4wXCIsXG4gICAgXCJAdHlwZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI6IFwiXjAuMTAuN1wiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNy44LjBcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJeNy44LjBcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI6IFwiXjQuMi4xXCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4xOVwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguNTcuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl45LjEuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCJeMi4yOS4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWpzeC1hMTF5XCI6IFwiXjYuOC4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjcuMzQuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rc1wiOiBcIl40LjYuMlwiLFxuICAgIFwiZnMtZXh0cmFcIjogXCJeMTEuMi4wXCIsXG4gICAgXCJub2RlbW9uXCI6IFwiXjMuMS4wXCIsXG4gICAgXCJwb3N0Y3NzXCI6IFwiXjguNC4zOFwiLFxuICAgIFwidGFpbHdpbmRjc3NcIjogXCJeMy40LjNcIixcbiAgICBcInRzLW5vZGVcIjogXCJeMTAuOS4yXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuNC41XCIsXG4gICAgXCJ2aXRlXCI6IFwiXjUuMi4xMVwiXG4gIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBWLE9BQU8sV0FBVztBQUM1VyxTQUFTLGVBQWU7QUFDeEIsT0FBTyxRQUFRO0FBQ2YsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxXQUE2Qjs7O0FDSnRDO0FBQUEsRUFDRSxrQkFBb0I7QUFBQSxFQUNwQixNQUFRO0FBQUEsRUFDUixhQUFlO0FBQUEsRUFDZixZQUFjO0FBQUEsSUFDWixnQkFBa0I7QUFBQSxJQUNsQixNQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsUUFBVTtBQUFBLElBQ1IsZUFBaUI7QUFBQSxJQUNqQixjQUFnQjtBQUFBLE1BQ2QsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsYUFBZTtBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsaUJBQW1CO0FBQUEsSUFDakI7QUFBQSxNQUNFLFNBQVc7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFB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
