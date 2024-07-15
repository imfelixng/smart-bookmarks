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
      "@utils": utilsDir
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAibWFuaWZlc3QuanNvbiIsICJtYW5pZmVzdC5kZXYuanNvbiIsICJwYWNrYWdlLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZmVsaXgvRGVza3RvcC93b3Jrc3BhY2VzL3BlcnNvbmFsL3NtYXJ0LWJvb2ttYXJrc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2ZlbGl4L0Rlc2t0b3Avd29ya3NwYWNlcy9wZXJzb25hbC9zbWFydC1ib29rbWFya3Mvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ZlbGl4L0Rlc2t0b3Avd29ya3NwYWNlcy9wZXJzb25hbC9zbWFydC1ib29rbWFya3Mvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyBjcngsIE1hbmlmZXN0VjNFeHBvcnQgfSBmcm9tIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCI7XG5cbmltcG9ydCBtYW5pZmVzdCBmcm9tIFwiLi9tYW5pZmVzdC5qc29uXCI7XG5pbXBvcnQgZGV2TWFuaWZlc3QgZnJvbSBcIi4vbWFuaWZlc3QuZGV2Lmpzb25cIjtcbmltcG9ydCBwa2cgZnJvbSBcIi4vcGFja2FnZS5qc29uXCI7XG5cbmNvbnN0IHJvb3QgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIik7XG5jb25zdCBwYWdlc0RpciA9IHJlc29sdmUocm9vdCwgXCJwYWdlc1wiKTtcbmNvbnN0IGFzc2V0c0RpciA9IHJlc29sdmUocm9vdCwgXCJhc3NldHNcIik7XG5jb25zdCBjb21wb25lbnRzRGlyID0gcmVzb2x2ZShyb290LCBcImNvbXBvbmVudHNcIik7XG5jb25zdCB1dGlsc0RpciA9IHJlc29sdmUocm9vdCwgXCJ1dGlsc1wiKTtcblxuY29uc3Qgb3V0RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsIFwiZGlzdFwiKTtcbmNvbnN0IHB1YmxpY0RpciA9IHJlc29sdmUoX19kaXJuYW1lLCBcInB1YmxpY1wiKTtcblxuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5fX0RFVl9fID09PSBcInRydWVcIjtcblxuY29uc3QgZXh0ZW5zaW9uTWFuaWZlc3QgPSB7XG4gIC4uLm1hbmlmZXN0LFxuICAuLi4oaXNEZXYgPyBkZXZNYW5pZmVzdCA6ICh7fSBhcyBNYW5pZmVzdFYzRXhwb3J0KSksXG4gIG5hbWU6IGlzRGV2ID8gYERFVjogJHttYW5pZmVzdC5uYW1lfWAgOiBtYW5pZmVzdC5uYW1lLFxuICB2ZXJzaW9uOiBwa2cudmVyc2lvbixcbn07XG5cbi8vIHBsdWdpbiB0byByZW1vdmUgZGV2IGljb25zIGZyb20gcHJvZCBidWlsZFxuZnVuY3Rpb24gc3RyaXBEZXZJY29ucyhhcHBseTogYm9vbGVhbikge1xuICBpZiAoYXBwbHkpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJzdHJpcC1kZXYtaWNvbnNcIixcbiAgICByZXNvbHZlSWQoc291cmNlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzb3VyY2UgPT09IFwidmlydHVhbC1tb2R1bGVcIiA/IHNvdXJjZSA6IG51bGw7XG4gICAgfSxcbiAgICByZW5kZXJTdGFydChvdXRwdXRPcHRpb25zOiBhbnksIGlucHV0T3B0aW9uczogYW55KSB7XG4gICAgICBjb25zdCBvdXREaXIgPSBvdXRwdXRPcHRpb25zLmRpcjtcbiAgICAgIGZzLnJtKHJlc29sdmUob3V0RGlyLCBcImRldi1pY29uLTMyLnBuZ1wiKSwgKCkgPT5cbiAgICAgICAgY29uc29sZS5sb2coYERlbGV0ZWQgZGV2LWljb24tMzIucG5nIGZybSBwcm9kIGJ1aWxkYClcbiAgICAgICk7XG4gICAgICBmcy5ybShyZXNvbHZlKG91dERpciwgXCJkZXYtaWNvbi0xMjgucG5nXCIpLCAoKSA9PlxuICAgICAgICBjb25zb2xlLmxvZyhgRGVsZXRlZCBkZXYtaWNvbi0xMjgucG5nIGZybSBwcm9kIGJ1aWxkYClcbiAgICAgICk7XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBzcmNcIjogcm9vdCxcbiAgICAgIFwiQGFzc2V0c1wiOiBhc3NldHNEaXIsXG4gICAgICBcIkBwYWdlc1wiOiBwYWdlc0RpcixcbiAgICAgIFwiQGNvbXBvbmVudHNcIjogY29tcG9uZW50c0RpcixcbiAgICAgIFwiQHV0aWxzXCI6IHV0aWxzRGlyLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGNyeCh7XG4gICAgICBtYW5pZmVzdDogZXh0ZW5zaW9uTWFuaWZlc3QgYXMgTWFuaWZlc3RWM0V4cG9ydCxcbiAgICAgIGNvbnRlbnRTY3JpcHRzOiB7XG4gICAgICAgIGluamVjdENzczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgc3RyaXBEZXZJY29ucyhpc0RldiksXG4gIF0sXG4gIHB1YmxpY0RpcixcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXIsXG4gICAgc291cmNlbWFwOiBpc0RldixcbiAgICBlbXB0eU91dERpcjogIWlzRGV2LFxuICB9LFxufSk7XG4iLCAie1xuICBcIm1hbmlmZXN0X3ZlcnNpb25cIjogMyxcbiAgXCJuYW1lXCI6IFwiU21hcnQgQm9va21hcmtzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBbiBlYXN5IHdheSB0byBmaW5kIHJlbGV2YW50IGJvb2ttYXJrcyBvbiBzZWFyY2ggZW5naW5lc1wiLFxuICBcImJhY2tncm91bmRcIjoge1xuICAgIFwic2VydmljZV93b3JrZXJcIjogXCJzcmMvcGFnZXMvYmFja2dyb3VuZC9pbmRleC50c1wiLFxuICAgIFwidHlwZVwiOiBcIm1vZHVsZVwiXG4gIH0sXG4gIFwiYWN0aW9uXCI6IHtcbiAgICBcImRlZmF1bHRfcG9wdXBcIjogXCJzcmMvcGFnZXMvcG9wdXAvaW5kZXguaHRtbFwiLFxuICAgIFwiZGVmYXVsdF9pY29uXCI6IHtcbiAgICAgIFwiMzJcIjogXCJpY29uMzIucG5nXCJcbiAgICB9XG4gIH0sXG4gIFwiaWNvbnNcIjoge1xuICAgIFwiMTI4XCI6IFwiaWNvbjEyOC5wbmdcIlxuICB9LFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICBcImJvb2ttYXJrc1wiLFxuICAgIFwicmVhZGluZ0xpc3RcIlxuICBdLFxuICBcImNvbnRlbnRfc2NyaXB0c1wiOiBbXG4gICAge1xuICAgICAgXCJtYXRjaGVzXCI6IFtcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmFkLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuYWQvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmFlLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuYWUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5hZi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5hZi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmFnLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmFnLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uYWkvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uYWkvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmFtLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuYW0vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLmFvLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28uYW8vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5hci8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5hci8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuYXMvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5hcy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuYXQvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5hdC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmF1LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmF1LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5hei8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmF6LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5iYS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmJhLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uYmQvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uYmQvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmJlLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuYmUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmJmLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuYmYvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmJnLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuYmcvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5iaC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5iaC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuYmkvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5iaS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuYmovKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5iai8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmJuLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmJuLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uYm8vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uYm8vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5ici8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5ici8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuYnMvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5icy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28uYncvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5idy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuYnkvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5ieS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmJ6LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmJ6LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jYS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNhLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jZC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNkLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jZi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNmLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jZy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNnLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jaC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNoLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jaS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNpLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5jay8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLmNrLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jbC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNsLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jbS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNtLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jbi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNuLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uY28vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uY28vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLmNyLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28uY3IvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5jdS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5jdS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY3YvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jdi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmN5LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmN5LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jei8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmN6LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5kZS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmRlLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5kai8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmRqLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5kay8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmRrLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5kbS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmRtLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uZG8vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uZG8vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmR6LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZHovKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5lYy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5lYy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZWUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5lZS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmVnLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmVnLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5lcy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmVzLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uZXQvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uZXQvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmZpLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZmkvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5mai8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5mai8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZm0vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5mbS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZnIvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5mci8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZ2EvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5nYS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZ2UvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5nZS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZ2cvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5nZy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmdoLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmdoLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uZ2kvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uZ2kvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmdsLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZ2wvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmdtLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZ20vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmdwLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZ3AvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmdyLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuZ3IvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5ndC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5ndC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuZ3kvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5neS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmhrLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmhrLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5obi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmhuLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5oci8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmhyLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5odC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmh0LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5odS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmh1LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5pZC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLmlkLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5pZS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmllLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5pbC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLmlsLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5pbS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmltLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby5pbi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLmluLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5pcS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmlxLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5pcy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmlzLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5pdC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLml0LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5qZS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmplLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uam0vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uam0vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmpvLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuam8vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLmpwLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28uanAvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLmtlLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28ua2UvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5raC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5raC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUua2kvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5raS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUua2cvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5rZy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28ua3IvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5rci8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLmt3LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLmt3LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5rei8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmt6LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5sYS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmxhLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ubGIvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ubGIvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmxpLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubGkvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmxrLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubGsvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLmxzLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28ubHMvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmx0LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubHQvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmx1LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubHUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmx2LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubHYvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5seS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5seS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28ubWEvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5tYS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubWQvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5tZC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubWUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5tZS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubWcvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5tZy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubWsvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5tay8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubWwvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5tbC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubW4vKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5tbi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUubXMvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5tcy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLm10LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLm10LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5tdS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm11LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5tdi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm12LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5tdy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm13LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ubXgvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ubXgvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5teS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5teS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28ubXovKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5tei8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLm5hLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLm5hLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ubmYvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ubmYvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5uZy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5uZy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLm5pLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLm5pLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5uZS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm5lLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5ubC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm5sLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5uby8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLm5vLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ubnAvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ubnAvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm5yLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubnIvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLm51LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUubnUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLm56LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28ubnovKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5vbS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5vbS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnBhLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnBhLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ucGUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ucGUvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5waC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5waC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnBrLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnBrLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5wbC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnBsLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5wbi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnBuLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20ucHIvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20ucHIvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnBzLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUucHMvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnB0LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUucHQvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5weS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5weS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnFhLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnFhLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5yby8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnJvLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5ydS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnJ1LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5ydy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnJ3LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uc2EvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uc2EvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5zYi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5zYi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuc2MvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5zYy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuc2UvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5zZS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnNnLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnNnLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5zaC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnNoLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5zaS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnNpLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5zay8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20uc2wvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uc2wvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnNuLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuc24vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnNvLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuc28vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnNtLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuc20vKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnN0LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuc3QvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS5zdi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5zdi8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUudGQvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS50ZC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUudGcvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS50Zy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28udGgvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby50aC8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnRqLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnRqLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS50ay8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnRrLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS50bC8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnRsLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS50bS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnRtLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS50bi8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnRuLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS50by8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnRvLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20udHIvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20udHIvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLnR0LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUudHQvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS50dy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS50dy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28udHovKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby50ei8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnVhLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnVhLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby51Zy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLnVnLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby51ay8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLnVrLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jb20udXkvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20udXkvKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvLnV6LypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY28udXovKlwiLFxuICAgICAgICBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS52Yy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS52Yy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28udmUvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby52ZS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUudmcvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS52Zy8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY28udmkvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jby52aS8qXCIsXG4gICAgICAgIFwiaHR0cDovL3d3dy5nb29nbGUuY29tLnZuLypcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLnZuLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS52dS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnZ1LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS53cy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLndzLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5ycy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLnJzLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby56YS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLnphLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby56bS8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLnptLypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jby56dy8qXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLnp3LypcIixcbiAgICAgICAgXCJodHRwOi8vd3d3Lmdvb2dsZS5jYXQvKlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jYXQvKlwiXG4gICAgICBdLFxuICAgICAgXCJqc1wiOiBbXG4gICAgICAgIFwic3JjL3BhZ2VzL2NvbnRlbnQvaW5kZXgudHN4XCJcbiAgICAgIF0sXG4gICAgICBcImNzc1wiOiBbXG4gICAgICAgIFwiY29udGVudFN0eWxlLmNzc1wiXG4gICAgICBdXG4gICAgfVxuICBdLFxuICBcIndlYl9hY2Nlc3NpYmxlX3Jlc291cmNlc1wiOiBbXG4gICAge1xuICAgICAgXCJyZXNvdXJjZXNcIjogW1xuICAgICAgICBcImNvbnRlbnRTdHlsZS5jc3NcIixcbiAgICAgICAgXCJpY29uMTI4LnBuZ1wiLFxuICAgICAgICBcImljb24zMi5wbmdcIlxuICAgICAgXSxcbiAgICAgIFwibWF0Y2hlc1wiOiBbXVxuICAgIH1cbiAgXVxufSIsICJ7XG4gIFwiYWN0aW9uXCI6IHtcbiAgICBcImRlZmF1bHRfaWNvblwiOiBcInB1YmxpYy9pY29uMzIucG5nXCIsXG4gICAgXCJkZWZhdWx0X3BvcHVwXCI6IFwic3JjL3BhZ2VzL3BvcHVwL2luZGV4Lmh0bWxcIlxuICB9LFxuICBcImljb25zXCI6IHtcbiAgICBcIjEyOFwiOiBcInB1YmxpYy9pY29uMTI4LnBuZ1wiXG4gIH0sXG4gIFwid2ViX2FjY2Vzc2libGVfcmVzb3VyY2VzXCI6IFtcbiAgICB7XG4gICAgICBcInJlc291cmNlc1wiOiBbXG4gICAgICAgIFwiY29udGVudFN0eWxlLmNzc1wiLFxuICAgICAgICBcImljb24xMjgucG5nXCIsXG4gICAgICAgIFwiaWNvbjMyLnBuZ1wiXG4gICAgICBdLFxuICAgICAgXCJtYXRjaGVzXCI6IFtdXG4gICAgfVxuICBdXG59IiwgIntcbiAgXCJuYW1lXCI6IFwic21hcnQtYm9va21hcmtzXCIsXG4gIFwidmVyc2lvblwiOiBcIjEuMC4wXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBbiBlYXN5IHdheSB0byBmaW5kIHJlbGV2YW50IGJvb2ttYXJrcyBvbiBzZWFyY2ggZW5naW5lcy5cIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vaW1mZWxpeG5nL3NtYXJ0LWJvb2ttYXJrcy5naXRcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkXCIsXG4gICAgXCJkZXZcIjogXCJub2RlbW9uXCJcbiAgfSxcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkByYWRpeC11aS9yZWFjdC1zd2l0Y2hcIjogXCJeMS4xLjBcIixcbiAgICBcImNsc3hcIjogXCJeMi4xLjFcIixcbiAgICBcInJlYWN0XCI6IFwiXjE4LjMuMVwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjMuMVwiLFxuICAgIFwidGFpbHdpbmQtbWVyZ2VcIjogXCJeMi40LjBcIixcbiAgICBcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiOiBcIl4wLjExLjBcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAY3J4anMvdml0ZS1wbHVnaW5cIjogXCJeMi4wLjAtYmV0YS4yM1wiLFxuICAgIFwiQHR5cGVzL2Nocm9tZVwiOiBcIl4wLjAuMjY4XCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC4xMi4xMVwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjMuMVwiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4zLjBcIixcbiAgICBcIkB0eXBlcy93ZWJleHRlbnNpb24tcG9seWZpbGxcIjogXCJeMC4xMC43XCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl43LjguMFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl43LjguMFwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjogXCJeNC4yLjFcIixcbiAgICBcImF1dG9wcmVmaXhlclwiOiBcIl4xMC40LjE5XCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC41Ny4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLXByZXR0aWVyXCI6IFwiXjkuMS4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjI5LjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tanN4LWExMXlcIjogXCJeNi44LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3RcIjogXCJeNy4zNC4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0LWhvb2tzXCI6IFwiXjQuNi4yXCIsXG4gICAgXCJmcy1leHRyYVwiOiBcIl4xMS4yLjBcIixcbiAgICBcIm5vZGVtb25cIjogXCJeMy4xLjBcIixcbiAgICBcInBvc3Rjc3NcIjogXCJeOC40LjM4XCIsXG4gICAgXCJ0YWlsd2luZGNzc1wiOiBcIl4zLjQuM1wiLFxuICAgIFwidHMtbm9kZVwiOiBcIl4xMC45LjJcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS40LjVcIixcbiAgICBcInZpdGVcIjogXCJeNS4yLjExXCJcbiAgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFYsT0FBTyxXQUFXO0FBQzVXLFNBQVMsZUFBZTtBQUN4QixPQUFPLFFBQVE7QUFDZixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLFdBQTZCOzs7QUNKdEM7QUFBQSxFQUNFLGtCQUFvQjtBQUFBLEVBQ3BCLE1BQVE7QUFBQSxFQUNSLGFBQWU7QUFBQSxFQUNmLFlBQWM7QUFBQSxJQUNaLGdCQUFrQjtBQUFBLElBQ2xCLE1BQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxRQUFVO0FBQUEsSUFDUixlQUFpQjtBQUFBLElBQ2pCLGNBQWdCO0FBQUEsTUFDZCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxhQUFlO0FBQUEsSUFDYjtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxpQkFBbUI7QUFBQSxJQUNqQjtBQUFBLE1BQ0UsU0FBVztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7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
