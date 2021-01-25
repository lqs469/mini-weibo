
import './mini-weibo.css';

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loginBox = document.getElementById('pl_unlogin_home_login');

        if (loginBox) {
            const header = document.getElementById('weibo_top_public');
            const bodyBox = document.createElement('div');
            bodyBox.className = 'bodyBox_miniweibo';

            const logo = document.createElement('div');
            logo.className = 'logo_miniweibo';

            bodyBox.appendChild(header);
            bodyBox.appendChild(logo);
            bodyBox.appendChild(loginBox);

            const content = document.getElementById('plc_frame');
            // content.insertBefore(bodyBox, content.firstChild);
            bodyBox.appendChild(content);
            document.body.appendChild(bodyBox);

            const loginStyle = document.createElement('style');
            loginStyle.innerHTML = `
                .bodyBox_miniweibo {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    bottom: 150px;
                    left: 0;
                    right: 0;
                }

                .bodyBox_miniweibo > #weibo_top_public {
                    position: fixed;
                    top: 0;
                    z-index: 1;
                }
                
                .bodyBox_miniweibo > .logo_miniweibo {
                    flex: 1;
                    position: relative;
                    height: 100%;
                    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAACCCAIAAAB91xxnAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AACAASURBVHic7Z15YBRF9sdfdc+ZyczkDiAY5AZFRJDTcCckXIKIIBEEFHVVVFQWFVdYdkXRn4u4u96CQLgRSAghEAIEAgQIiOwCKopcIeScydzT0931+2PciGHOnp4jpD5/hemuV49k+tt1vPcKYYyBQCA0Y6hwO0AgEMIMUQECoblDVIBAaO4QFSAQmjtEBQiE5g5RAQKhuUNUgEBo7hAVIBCaO0QFCITmDlEBAqG5Iwm3AxGMuQ5MlWCpBVsdOEwAGCgpSJSgTAJlLKiTQakNt4sEgggQFbiFH3fChXwoLwXWBEgCSAKIAor+7SrmAfOAWeBtIIuHVg9Ayx7QaiAkdf79HgKhSYFINtEf2DoDqr4DSupfK9YCMi10GQudHoakLsHxjEAIFkQFbqL4HfhhC6AAXumsGRK6w30zoUMaUGScRWgaEBW4iS96Aogxquc5iG4B/V6BDmkiWCMQggzZI7gJsfSQosFSDYWvwtZpoLssklECIVgQFbgJcYdFtAxqzsO6NPhuDfCcmJYJBFEhKnATwfhlSDVw7B+w8xmwGYJgnUAQAaICN9F7LvCs+GYpGipOw6ZHwHhDfOMEQsCQ1cE/sm8+/LgTKDkgBACAOeAZwBwAAKJ//wFJAdG/3eM7PAuTtkB8B7GdJhACgqjALdRchDOfgkUPcjUkPgDJ94KmJSi1vwUFWfVQdwVqzkHlYai9AroLQMn9iBfiGZj0LcR3DJ77BIK/EBUIDLsRTn0Fv+6H+l+BlvvUhGchqwDULYLsGYHgK0QFROJiCT7xD6T7GSiZ95tlapiSAwpN8N0iELxDVEBUfsiDkr8B5wDkbdk1uTuM/YqkHhAigSajAhhj3mDk9fXAsgBAqdVUfCyiI/Ipyn0Srpd5SUbgOXhgDvSaFSqfCAS3RLQKYJ53/HCBKTlsO3jKvrkAkAGBCoACwBgYQA7FlMeipjykHDk03J7eQunHcHqll1c9a4ApuyCufah8IhBcE4kqgHme+e952/Zdpnc+QwghrdLTzQyL4rQJu7KlnSLscTqXC4cWeZkaxNwFj2wg8wJCeIksFeBtdtvm/Pr3l+GfK5DG08PfuKHhRmLpflmPu0V2iGVAdxmMl8BaA5gHqRKkWtCkQGxboH1IGTyfCwcXekpS5DkYtgQ6ZYroMiF0YIxtdmxnAGMkk6Iopd8hJJFBpKgAb7aYV68zzH2Tik4CWkhEI19/vVV9OZL7tl3nCz/lQdE8wACU/Pc0YWccEWeGDo9C13HQpp+XDOLj/4ZTX3q6h5bDE/tAIp7bhGCCTWb7wVJbbqH9YKniwV6Ycfx2gaKs+fuppATNwlcUGUORKiqsbvpH+FUAMw7zqo31c16htAFtoWOMJfe1Tdydi0TR44sHYM8coDw+nDwL0igY+g7cNdjTyD/3Kag45fYGnoVBC6HbhIC8JQQZ7HAwh47Xv/kuf71SMay/55ttxcfi87OlXZtMbFg4VQDzvHXPPv3kF5BUIuz939ig3tLSdkEcFfiqF/C+2eFZaN0f0t4HudrtPSsGAmt3e1WmgemFZHUgMuGulBuXfWHdkKMcOcj3VtaCYs3ieaqnHw+eYyIStmwi9kp59dip+gkvIIVMFAkAANAqrfsPiWOK81kcKQlcPwErU0F3ye09qX8FnnF71VoN10/55R0hBHDlN2pGT6vqNwZ0Or8kAACUGYMNCz/gq2uD5Ju4hEEFsMNh+nxNZef7ubJzSONDpJ0/mD5fJZIlP38zlATWDQPdr66vdhwBCV3d1i+g5XB+m3/dEYIJV1FZ99hzxgVLJImxyvRUYUaUIwfXzXxZ5KIVwSHUKuC4er2qb6ZxwVJKkyy6cQTg2JQvji25wu+/nzQONk5wW0dgwALA7ocDF7Z7mjIQQgV2OOpf+1t1n1GUXISykY6yM1xFZeB2gk3oVADzvGXrzqpO3fnyKtGmAI1ACKBKnJWOsWsAHH4LASWB/BdcVxZqdS/Eus8pRjSZFIQdpvRUZedUXFOtGD5QFIPKjMH2/H2imAoqIVIB3mrVPfdS/ew/U5o7QtNjoMTfBVMKID4FJCqQqkHbCuJSQNMSaDlwjCd1qDoDF/e7vtRhvNsqJrQcrpWI4DZBEJhx1I6dUTfxKcWgPuJatu05KK7BYBCKPQL2Snn10IlgsgS7I8AYW9hWpvPB7eWXQ3B0CZhuuF3V5xl46oSLEADGCiv6uk061LaHyRvF9JPgG0zJcd2z8+W9uwfDOHvtRsLeTcGwLCJBHwvYDh2t7HxvKCQAAAPIHh0R9G7ap8Lju6DTWMC86xsQDVcOu/hcpoRY92HONceBc7i9SggGPF8//53aSbODJAEA4Ex+i3CCqAKY583ZW+rSs0I5C1BOHBuinoYths4TfqtB1ghEw8kVrlvFd3E7m0ByMJDChKEDm8xVfUbhykrlyMHB6wUp/QiEDxfBOj8Hs6xh4RLLpxuRJjpIXbiA55UjfPqL8jYbX13LXa/kqyu58kquooo3WUAqpdQqOqWFpG07Sbs76eQkRHlUySF/gWuHwFzrInq88jBYdBAV2/jzdpnw805AriYFlALMVRDbxhf/CQHCHD5eN+tVRf+ewe6ISk4IdheBExQV4O123Z/mMLlHQBraeLhaA5K5DUDgjSb2l0v2Q0ctm/PYoyUIaUCpRHJXRUQZDpvN0DJG+/5bytGjqGj3MeHDPoTcLBdPtUQD9VddqEBCJ9fDBwCgJGC+DtDLbV8EkbBu2WnPLwyBBACAbKDIy43BQHwV4C3W2sdmsaVng7Ud6AaMMSSyt4YPc/p69vvTxn9n27d9i1QtkFwCAFScx0mKjEYyDdh4w4uL9dOeit+TJx880HVgcqvuoIgDxtT4c0oK5msA9zb+XNPC0yyMJ+sCQUf33Ov2nD2KtAdD053cLxXAGFttvN6AzRYAQFEKKi4mBHMKkVWAt1hqMqdwP1wS16yPaD79vOFn7HAwZWeM//6a2bgdYuMRQlRcawE2qdg76zKf1PzjTdWz010LgSLKhQoAQH2Fa4sSFeAmsGJ0G8JydbNfozAXMgmwHT6pTfH0vsEMw1741X6w1L77APvrFXnve4H741ARIWtBsaRLB9W0iYpJYyl1UObXYqoAb7ZUp0/if74qok2/cJz4nh2aiusNtvy9hlfmIWUykktRXKATM6SRG15ZIunWQTHYVTCJxM3v0N2LHVGiHYhI8B2erx72iLRdSJddpF3au0wx5iqrLWu3WTfl8lU1zggFOkZN97y7sQQAAMbOFAbm4NH6t5bK+veO3/iZ26+cUEQzx1us4ZUAhJB1xSbrP74AUKAYBRUj5M3v1rhGXjtiVMv6G1TULcMzzt2L3d3In2hAqMFWW+24GSGWAABQjP9D/RhsNFs25Vq+Wi/t3BYAZF3aQZd2vltTpg8CgMr70hOKNtLJiSL6Kc7UnbfZasZmhVECnCCEUGwsig1KyRcqLsVecszFBbubd767cglsKEInCA1gi7V60ATJHUmh75qvqQWex3aGOf5d9ZCHK+8Z4jh01CkBgpH3vqcmdTy2iZl1IkZWP+Oom/ks99+fAzcV4RiXfdH4I9YBFlfpIjwHqlYuPjfVAHajGhh7r19O8BNss9WMfUJ2d3gKfpiWfVnZZdCNtn0sn6yUtm2tGOqlPImPyAf0Mi7+hyimnAQ6I8Acp3vtdce+ZpEJ49hbhDnuD+XP7QYAVxGErAG0bV18Xv0TgJvdU8xClCvhIAgFM0zNkEek/oy6xUWZEax4JMuqzdFzn6YS40WxFujLx/jhZ/bsAlFciXwQUL/XmXOiigdK4eLW6BSIdrUqebnI7TkFvIMcWyYmHFf36DNhlICgokh70FbgJmnNfwJSAUvOLtOij0MdGhQ+MPAuVhxSBjZOKODskL7UtYnas26H/dgG0WIu+TRrMK6ZMJOOcV8DrukjYraicBWw/+es7rFZSN2siudySHrLHGrkcmjVAzAHPAu8AxAN/V+HVg+4aM1zUOt+9UTbHaRNIOa8SWD8+3JJXEy4vQguuLZOLFMC1wV4fX1tr9FUbPN6d0n79Xd9JtrYlWA3wbXvgJZCm15AuxnzV/wXOLvbo43bDhDN0eaN6Z8rzJ+tDlloUNiQiDYGF6IC2OGomfgEim12R+4qJo1xe00eDe29Faiz1LmvR+6AVk0g4DzyYX/4hT31/e0vAQB0S9Fq9gmZERiX/Zv7/vbfF2wEtjqUw4cEZCK5i9uSBJwZWpE8okDhqmtrH36ySRT8DBx5umgbEH6rgO3YCdOij0ORKcRjzLKYZTBrB44HBw1IiiRSJJcihRQppEgmQbQMeBooGtvtmLVjlsUsF6wvgdVAt0sJyIKmJcR1duEe5uHuJ0DR7MZWolObmSXvc0sG1+2ItaBY1ke0nEj/ZgS81VY3aCqKCU7JAIwxxwGwCKkoNSBtkuK5KfLe90s7d6BUKq9N2es3mLPnmYJ9zM7N2BiNbTaMeKBoLzUCfEb55+copatNQb/I/BdsyABM/T41wDxIKBj4WqCWmzkYG5Z8LLunU7j9CBGStq2pFqJFQ/pRdxBjrH/pz7aNu8Xq+zezHA88i2gF1VKqWvBm1NiRVJQ4Z7xZCg+YFi7jf73CM1ZAEhTA+AVbHYknd0o7irT5vGUS6C8BpoDioc1QSH9fHLPNGMf3Z2tGT1OOuP2XA34jJibmo8ViGfNDBWyHS+vSpiN1wO9DAADAPA88i2Ry2chU7fsLJUlB3G7g6nT6lxYwBUcwZ0cSiYAsA1xnTL5+gk5sAnVjXKLX69VqNe1ygyMw6urq4uLiRDfrF9hur7x7qOLB3uF1I5Ro3ntLxLGAr69HzDh0U54XRQIwywGApEPbxDP7W1Z8H//Nv4IqAQBAx8XGr/mkZfXp2J3fIA2HHXZ/Ky+jOHX9e8s4fX3YD3cVgE6nGzp06IwZM7hbE1cDY/Xq1R06dDh58qS4Zv1F/9ybzUoCrLsPiigB4LsKmD79CphAK+FglgOOU731fMvKM0lH86R3tAzQoL8o+/dt8fO5pHPFVIwDOzweK3AL9uwdlUndK+8fat1XzBmNwXNSXFiWzczMPH36dHZ29vTp01nxSuKuWbNmxowZOp0uPT39woULYpn1F/vhE/bdB8LVe9gQtbSxTyrAVdcaXv9LIN1gjgOW0/zzry1rzmrnPheIqcCRtGjR4qcf4o/kAo2wP69HFBuDr9fpH5tTGdO59qlX2RuVkT80kEgks2bNcv68bt26adOmiSIE2dnZTzzxhPO/37dv3zZtwlQ0FWNd1vOKEeIcJdRUUI4cVNVvjHVLnlj5xT6pgOG9DymNwHQ3jDE47FEvTG9ZezZ66iPCjAQDeZdOLSvOyCePxpzd381FlJDA7CisShlYM2UWJ14gZ5B4+umnv/zyS+fPGzZsyMrKClAI1q1b1yABGRkZW7duVSjEWS3yF3P2t4oh/cLSdXiR3dPJnrensuOA6tTx9pLj2BHQON376qDj0pXqrqlIoxVgHbMc3UGdfKxUkG8hwnHlWnX3kSCnXJcV9AbW12n+vUQ1YyoSuw6UuHz99dezZ892/rknTZq0du1aqdRNpLNH1q9f//jjj/M8DwDp6ek5OTnhkgDeYKzqma5IdZWy0cywHzmp+fvrioczhX0JvauA7pXXbWv9PggYYwysTbviI9X40QLcCj0V7bpik0SYEAAASo5LPLSD1kZ0EtuKFSueeuop51984sSJ69ev91cINm7cOHXqVKcEpKWl5eTkKMN36obu2fnIZg1X7xGIvfS72NUfC4gm8qICbGVVZUp3SutfxDLGPBUdlXy+BMndng7gIxzHORwOjuOcftI0LZFIhL3EvHKjWze+hhYsBLz+ctKPZ6RtA4svDDIrV6588sknnb/MCRMmbNiwQeb+BIdGbNq0aerUqc6NhhEjRuTm5oZRArCduZHyQPDKeDRRrAXFsr73x235AvnzjHhZF7CsW++3BHCcpHNci4vHBUsAy7I1NTUbN24cNWqURCJRKpXR0dFqtVqtVkdFRclksoSEhCVLllRUVNhsNmFduKTFuXNUDCN4wY+KSanq0sPxy68iuiQ6M2fOXLlypVPptm3bNnnyZIZhfGm4efPmBgkYPnx4eEcBAGD6v8+JBNyKMmMwHauuHjCOu+amEL4rPI0FMMdVRHX0K14Ys5y8//3xeWt8b/J7W4wNBsPXX3/96quv+t5q5syZH3zwQXy8OKWXAKAisQcgV9VEfIPXX0m+9rMksuOLVq1aNXPmTOeffty4cZs2bZLLPdWJ+PbbbydPnuyUgGHDhu3YsSNKpPhOYWCLtbJnmqL//WH0IcKxFR9LKs2jfCtV7EkFrHsP6MY+gzS+1hHBLCcbODAh95YSnV4bYqzT6aZMmVJYWOhvWyd9+vQpKiqKjhYhwYHT6Svb9UUy4dVTUFJ88um9risRRAxr1qxpWOcfM2bMli1b3AnB1q1bJ0+e7NxWGDp0aF5eXnglAAAsa7cxhaLV27pdsZV+l1S8zZeDEj3NCKxbdvohATwvfaCdAAlgGObtt9+Oj48XLAEAcPz4cbVaffTo0cA38OnYGOWfHsesmxRgH8BVtebsDQG6EWymTZu2evVqiqIAIC8v7+GHH3Y5vXLOGpwSMGTIkLCPApwY/r4s3C40ART9elZnPAac92+y27EAb7dXxNxJaXxaFMAY03cmJZcV+ecmQHl5eevWYh4fMm3atFWrVgle4WugIrkH4EDmBZdbVF+jNRG9ZQAAa9eunT59unPNPzMzs9HO//bt2ydNmuSUgEGDBuXn56u8JXeGAF5Xb5gbUAxbs0LS457ouU97vsftWIAp+x6Bz5XbeOyvBGCMT58+La4EAMCaNWv69OkT+IhA/fEi7IOIuoOKSbFt3x6gDyEgKytrzZo1zhHBrl27xo8f3zAiyMnJaZCA1NTUnTt3RoIEAIBl/bZwu9CUMH30JXf1uud73KtASYmP0wFsZ7Rfuym5664JxoWFhT17BuXo6LKysjfeeCNAIYiePAFBQNuc9XPfjfz4YgCYOnVqdna2Uwh279790EMPWa3WHTt2NEjAgw8+mJ+fL8qaiwhgbNsucm777Y1iaP/6v3hJXXerAraiMl/6wBhL7ktRPeRfaNCJEydGjhzpVxO/WLp0aXl5eYBGJF1SAnqMTWbumhcNjhAee+yxtWvXOoVgz549gwYNmjhxosPhAICBAwdGkAQA8EYze+FiuL1oYtiLDnmOkXetAphlHYcO+dIBZkzxm9f65dOVK1f69u3rVxMBtGnTxjndFYx6+SL3J5F6B6nVjrM/BeJAKJkyZcq6deucBQjKysqcEjBgwIBdu3ap1RG0usFdvqYYHPQvz22GcvhArqLKww2uVYCrqkHuDtK6GYxlvTv4VXuDZdmUlBBF1+3atSuQ5ore9wEKYLePprjyK4E4EGImT558c6SGUqncunVrREkAADAlx8PtQpOEOXLCw1U3KlBTC+B9UQAzds0HH/rlzeeff+7X/YEwZsyYAIcDSBLQmSvcNU8CHGkUFBQsX7684Z9WqzUrK8tiiawTlu1EBQTBHD/t4aprFeBr6pDSe3ISFZ8s7+lHyVedTvfCCy/4fn/j7ijqxRdf3Lx5s++h73Z7QAnYSN4ElvdEYc+ePePHj3f+unr16uX8DRcVFY0ZM8ZsNofbu98hiwLC4MpveLjqZl1AV+/99EGMJV38i5PdsEF4LI1CoeA4bvny5Y888ojdbm/btq0vrfLy8gT3CABIElD9YqRoGse3FRYWPvTQQ04JGDZs2MGDB7du3eoUgv3790eUEPC6+nC70DTxWE3Hzbfc5j3DBDOsImuq726wLPvcc8KrDH388cc3//OTTz7xpdWaNUIyGhrAgU0o6NYRnU3gpKioaNy4cc4wgSFDhuTm5kZFRY0ePXr79u3OmOIDBw6MHj06QoQAmyNrhtJUoOJjPV11/bFC5kP5HVbe148CD5cuXfJ8A0Lorrvu2rp16/nz5/fu3Tt9+vSbQwDvvPPOhp8xxj6qwI4dO3z30AUO4auDmGEl7ToG1Hvw2bdv39ixY50SkJqampeX1xAalJmZ2SAExcXFo0aNMplM4fTVSWC63GyRdvX0VXStAlSc1lkp2COcpM0dvvvhuVLtSy+9xPP8xYsXJ0yY0KVLl+HDh69atYrn+Xnz5jlvePTRR/H/yM/PD3Co7yOYF160F1uMdPu24vkiPgcOHBgzZozVaoX/xQU0ig7MyMjIyclxCsHBgwcjQQiayiQr0pAN9PTCdqMCSYlg9VbJjJcjmR+VDPbt2+fuUnl5+UcffeTy0tKlS52XDAYD9T/GjHF/aqh4sNdvYJvwLz11R6tIPr+guLh49OjRTgno37//rl27XIYGjRw5Mjc315lccOjQoczMTGNY6y9TsUIq3xEkndt7uOpGBZITAbyurvs3NjvkJgyptLS0VSu3pU0RQoFsK/TpI/wgYNMX3wASHkQc/fozgSc1BQnni925C9i3b9+CggIPcQHp6ekNQlBSUhJeIaDuutP7TYQ/Yi/7L4ryVBLGtQrQ8XEQ7e3wTMrBGQy+u3L+/PlbP+zWrZvXOEKapt2NFLzy5JNPCmsIALaVGxEt8DHG+nrl6AzBXQeVkpKSBgl44IEHdu/erdF4+VunpaXl5eU5iwsdPnw4IyPD4M+fXkTk/cjJzn4T/fwMzze4VgGEkPLx8d6MS9if/aiu5fJt42NNgdTUVN87upmsrCxhDTmdjjOaBWcWyyZk0K1CfeaKLxw+fDgzM9O54N+rV689e/ZotT6NsYcPH94gBEeOHBk5cmR9fRg27eTDm81JhCJhP3JSOdXLs+x2P1w+LBUcHtfGJDLrdj9CdPv1a1w3Pj4+3sNc4Gac01cBeC6k5YGaAaMFBw5ivU391ssROB04cuRIRkaGc4WvZ8+ee/bsiYnxOXkcYNiwYTt37nQKQWlpaViEQHp3Z1uJT3luBCeKUSMorZexnlsVUIwYxFs9FTBENOXY51PGkZP09PTGXfhcx77hUA2/ePjhh4Wdz8mbzGxVneDHWDZ+iOzuLsLaBo+jR482SECPHj0KCwsFnDI6dOjQ/Px8Z7mhY8eOpaen6/V68X11D1LI5WmDQtljk8ZaUKx5Z77X29yqAKVUql540XNjxxk/cuYefLDxWM7HbSer1bpq1SrfO2ogOztb2JNc2eNeRAssdo71tdoPF0baQMD56nau6nXv3n3v3r2C67UOGTKkQQiOHz8eeiFQvzw7lN01aVQzJiOV9wpxniJkVU9Px54XgWRy/SJf64t07dq10Sf19fW+HHe7YMECH7u4mfvuu0/YmTmGz1ZivVzwY6z55B1paz/CKELA8ePHGyTgnnvuKSoqSkgIaAtz8ODBu3btcgYXnDhxIi0tTafTieOrD0g6t7cd/S5k3TVdHD/8ol7kUzlvTyog7dhO8YSnkwURTVk+3+yjT1qtds6cOY0+nDBhgudWOTk5y5YJKTVZWloq4EnmTWbTG+8JPmsMxceqZk4X1jZ4rFixwrmk361bt6KiosREEc6JHzRoUIMQlJWVBRqj6SeaxfNC2V1TxFZQHLv+Mx+DrLydTVReUdm+B6Vt4e4GzPHKWZNi31/oS2fXrl279XDbTp06/fjjj7fezPN8VlaWsASknJyccePGCWhYEd8d0yBsIMDrLyVf/UWSJMIzJi4sy06ePPncuXMHDhxITvbvjBnPOMMHFixY8Prrr4to1js8Xz1korRdmA5KbgpQrVpqlrzh483ezyk0/esr418/AsrtqIF3WFr8WOpLnBzGePHixYsWLWr0uVwunzdv3vz5853haxcvXnz33Xezs7OFHT00atSovLw8AU/y9TYdwK4UemapJf7wZnnvoFRSDByGYfR6fVJSkuiWr127JnoJWV/grt+o7jVSMZIcT+QC9npVQsF6oHz9JntXAcxxVUMn8j+6z+vGGMXGtPjRp/0ChmE87N7RNM3zfCDV/rRarU6nE/AkV6S0xVa1wOUAhtN+/n7Uo03jXNbbhvp5f8PV1eH2IuKwn/xP8ukioP1Iivd+K6LphG0reMM193cgXqevTkvzpT+ZTFZZWenuasOppMLo2LFjbW2tEAm4o71wCeB49ZK5ykmjhLQlBID2/bcc5U2pmlMIYM5eSDqywy8JAF9UAADo+LiEw/uwwe2GEELIcep6zejHfbGWlJR09epVXx30mfnz5//000/+BghwOt117d3YESVYAlRvPa165slI2xpsFiCUkPsNCSJqwH7kZOL+LUjtd8Fo7zOCBqx79usemo00brcfMcdJe7VP3J3rizWdTicgasUlCKELFy60b+8pa8olxpXZxlcXI4lcYKQww6rf/bPq6enI/aIJIdjwNXVVfUcpUoWnjd0eMOcvJu7dIEACwMexgBNl+tCYLZ9ig9uaM4imHad+udGzcaSwS2JjY1mWFbYLeDPvvPOOxWIRIAE32nczznsPSRXCJADrLdo1y1XPPEEkILxQCXFJx/Nt+4+G25FwwvxwMbFkuzAJAL9UAACiRqfF5n3jaWpA0Xy5+bqqq/2siwzCRtA0/fLLL9fV1b34opcgRZcsWbLEYDC8+eab/kYHGT5dUZFwN2+kkZ/TpwZ43a/xJ/OixqSRiUAkQMXHJZ0qtJ84E25HwoC1oBglJycdyUVSgUEu4NeMoAHm3Pnq+wdQWve7tRhjlpX2vDexaKOPNs1mc1lZ2dtvv33w4EEPtyGEnn/++fnz5ycmJgrIFLKd/F6XOQVzFJIEUEpMKU8+XUj7k4dDCAHYYq0eNF52T+dwOxI6bMXHtEvfUj46NkA7QlQAADhdffXAMbjWU0oZ5nmEWNXi+ZpnZ/pumWEYo9FoMpkuXrxYU1MDAAkJCS1btlSr1dHR0SqVSiIosM9Wdlr30ERslyFKIjhfGOtsqsV/0rw2nAUtIQAABPRJREFUR3BwISG4YGz82zLTJ6uUGbd5HIG1oJi+s1Xivi0oWoQjZAWqAABgh8Pw92Xm979EGk9lTDDHIZ6PXvqGenZ4QmsNX602v/Ee5jGihT//AMDXXE06Xybp2I7MAiIc5vCJumlzFINu2/VCa0GxZtGrqtlZIChl9laEq4AT5oefanqPRSovg3PMcWAH6cAesauXhybG1l52Wv/oU7zZgTkWUVQgzz/WmVTvzFW/9Azl82kohDDD8zXjZ0nivNXLampYC4ql93aNW/8JFS/O/pqTQFUAALDDYVqxxvDifCrGS3UdzPOAOUQj2dg0zaL50tY+lRjxwxOMLbkFxpfn4joZlrBAUYEu4DMsdW/7hE1f08nix94Sgg178XLtuBny3t3D7Yg4MP/5UbN0gWKE+OUVRFABJ5xOr391oX1dHtJ6n6hgngeORViOtIz8qVlRYzPlPe4R0CnG2HHpsnXHbuvyD3hTFDAOoBDQtAiDdobFMaqE/LXSzh3IXmCThjlxui7recWAJlyw0H7ie/Vbc6Me81oEUCCiqQAAYIy5ikr93L8wOYXIW5Gjm9rwADzwCCE5UgHIWaple8kD3SV3taZatkD/2wjg9Xq+VsdevMIe+w+uuQh2KW9DgB0AHIAkwKPE/gDDYq0qYccq6d1dyPN/e4AdDqbkhO5P8xX9IjTdyx3MmR+iX302aspDYi0BuERMFXCCMearaw0ffmL5cDkVL6jeBo8x7/QKAzS4hwAQACAaBTLJ9wDWGSXp/WKXL5HclUKe/9sS9vJVw8sLmdPnFIMjeu3QVlgiH5Ea/focadcOIehOfBVogDOa7EeP6Sc/CxaEYoSU/QkRDMsbL6n/+a+oR8bRCfFkC+C2h9fVmz75xrr2W3mf+8LtS2PsR06pZk+NmvYI1SJ0S1FBVAEnmOO5ikrLllzTa4uAVkeQHDAsb7we9eKc6Gdn0HelUAGEXhGaKHxljWXDNuu2Au7iZcWwAeFyw7b7IN2lQ9Skscop46g4T8eKBomgq0ADPMtyFTdsew8aF70P5TUoJsbf/EdRwLVmDNWqhQujJo2TpLSmlJ6CHQjNAp7n9Qb7wVLL6s2OE6cVwweGolOEbMXHJF07qqY9IhsygE5OCNI81ydfQqYCDWCMeX09d+mqdVeR+YtVcK0SKBWKDdrTyLDYaMTgUM59TjVxJN22HZ2cQIb9BHdgm93x/Vl7yXHmwFG+qpqrqFYM6x+4WVvRYZQQJ2lzh2z4g/LB/aXtUpBGYPKP6IRBBW4GY8xbLHxNHXfpsr30pK2gmC05jIACiELRcpD5M0rHGDMsmFkAGwYDattNMXGUYlAfaccOVEI8FaMlTz7BbziON1t5nZ77+Vf2/AWm7AxfXctV12GjCRuNiozB0Ohob4nEtrcERUVRsVpKq6bvbC3p0k7arQvdrg3dIgkpFUFd6hdMmFXgVjDH8RYrNptxvRGbzJy+jrtRw12v5I1mXG/A9UaMsfN5RlFKKjEeyWV0iyQqPkaSnIy0aqSORqooFK2ipAIPFCAQ/IDHgHnAGBCCwEJUw0jEqQCBQAgxZFecQGjuEBUgEJo7RAUIhOYOUQECoblDVIBAaO4QFSAQmjtEBQiE5g5RAQKhuUNUgEBo7hAVIBCaO0QFCITmDlEBAqG5Q1SAQGjuEBUgEJo7RAUIhOYOUQECobnz//Crn28WN9PmAAAAAElFTkSuQmCC') no-repeat;
                    background-position: center;
                }

                .bodyBox_miniweibo > #pl_unlogin_home_login {
                    flex: 1;
                    height: 100%;
                    position: relative;
                    background: #f2f2f5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .bodyBox_miniweibo > #pl_unlogin_home_login #pl_login_form {
                    background: transparent;
                }

                .bodyBox_miniweibo #plc_frame > *,
                .bodyBox_miniweibo .footer_link,
                .bodyBox_miniweibo #base_scrollToTop,
                .bodyBox_miniweibo #base_reload {
                    display: none;
                }
                
                .bodyBox_miniweibo #plc_frame .WB_footer {
                    display: block;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                }
            `;

            document.head.appendChild(loginStyle);
        }
    });
});

